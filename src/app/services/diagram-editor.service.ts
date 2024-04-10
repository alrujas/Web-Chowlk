import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiagramEditorService {
  urlParams: string[];
  config: any;
  drawDomain: string = 'https://embed.diagrams.net/';
  ui: string = 'min';
  format: string = 'xml';
  libraries: boolean = true;
  frameStyle: string = 'position:absolute;border:0;width:100%;height:100%;';
  frame: HTMLIFrameElement | null = null;
  startElement: HTMLElement | null = null;
  previousCursor: string | null = null;
  previousOverflow: string | null = null;
  data: any = null;
  title: string = '';

  constructor() {  
    if(typeof window != 'undefined')
      window.addEventListener('message', this.handleMessageEvent.bind(this)); 
  }
  static editElement(elt: HTMLElement, config?: any, ui?: string, done?: any, urlParams?: string[]) {
    if (!elt.dataset['diagramEditorStarting']) {
      elt.dataset['diagramEditorStarting'] = 'true';

      const editor = new DiagramEditorService();
      editor.editElementWithOptions(elt,config, ui, done);

      return editor;
    }
    return null;
  }

  editElementWithOptions(elt:HTMLElement,config?: any, ui?:string, done?:any,urlParams?:string[]){
    this.config = (config != null)? config : this.config;
    this.ui = (ui != null) ? ui : this.ui;
    this.done = (done != null) ? done : this.done;

    if(urlParams)
      this.urlParams = urlParams;
  }

  editElement(elt: HTMLElement) {
    if (!elt.dataset['diagramEditorStarting']) {
      elt.dataset['diagramEditorStarting'] = 'true';

      const src = this.getElementData(elt);
      this.startElement = elt;
      let fmt = this.format;
  
      if (src.substring(0, 15) === 'data:image/png;') {
        fmt = 'xmlpng';
      } else if (src.substring(0, 19) === 'data:image/svg+xml;' || this.startElement?.nodeName.toLowerCase() === 'svg') {
        fmt = 'xmlsvg';
      }
  
      this.startEditing(src, fmt);
  
      return this;
    }
    return null;
  }
  startEditing(data: string, format: string, title?: string) {
    if (!this.frame) {
      window.addEventListener('message', this.handleMessageEvent);
      this.format = format || this.format;
      this.title = title || this.title;
      this.data = data;
  
      this.frame = this.createFrame(
        this.getFrameUrl(),
        this.getFrameStyle()
      );
      document.body.appendChild(this.frame);
      this.setWaiting(true);
    }
  }
  handleMessageEvent = (evt: MessageEvent) => {
    if (
      this.frame &&
      evt.source === this.frame.contentWindow &&
      evt.data.length > 0
    ) {
      try {
        const msg = JSON.parse(evt.data);
  
        if (msg != null) {
          this.handleMessage(msg);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  handleMessage(msg: any) {
    if (msg.event == 'configure') {
      this.configureEditor();
    } else if (msg.event == 'init') {
      this.initializeEditor();
    } else if (msg.event == 'autosave' && this.startElement) {
      this.save(msg.xml, true, this.startElement);
    } else if (msg.event == 'export' && this.startElement) {
      this.setElementData(this.startElement, msg.data);
      this.stopEditing();
      this.data = null;
    } else if (msg.event == 'save' && this.startElement) {
      this.save(msg.xml, false, this.startElement);
      this.data = msg.xml;
      if (msg.exit) {
        msg.event = 'exit';
      } else {
        this.setStatus('allChangesSaved', false);
      }
    }
  
    if (msg.event == 'exit') {
      if (this.format != 'xml') {
        if (this.data != null) {
          this.postMessage({ action: 'export', format: this.format, xml: this.data, spinKey: 'export' });
        } else {
          this.stopEditing(msg);
        }
      } else {
        if ((msg.modified == null || msg.modified) && this.startElement) {
          this.save(msg.xml, false, this.startElement);
        }
        this.stopEditing(msg);
      }
    }
  }

  setWaiting(waiting: boolean) {
    if (this.startElement != null && this.startElement.parentNode instanceof HTMLElement) {
      // Redirect cursor to parent for SVG and object
      let elt: Element = this.startElement;
      const name = elt.nodeName.toLowerCase();

      if (name == 'svg' || name == 'object') {
          if (elt.parentNode instanceof HTMLElement) {
              elt = elt.parentNode;
          }
      }

      if (elt != null) {
          if (waiting) {
            if(this.frame)
              this.frame.style.pointerEvents = 'none';
            this.previousCursor = (elt as HTMLElement).style.cursor;
            (elt as HTMLElement).style.cursor = 'wait';
            console.log((elt as HTMLElement).style.cursor);
          } else {
            if(this.previousCursor)
              (elt as HTMLElement).style.cursor = this.previousCursor;
            if(this.frame)
              this.frame.style.pointerEvents = '';
          }
      }
    }
  }

  setActive(active: boolean) {
    if (active) {
      this.previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      if(this.previousOverflow)
        document.body.style.overflow = this.previousOverflow;
    }
  }

  stopEditing(msg?: any) {
    if (this.frame != null) {
      window.removeEventListener('message', this.handleMessageEvent);
      document.body.removeChild(this.frame);
      this.setActive(false);
      this.frame = null;
      if (this.startElement) {
        delete this.startElement.dataset['diagramEditorStarting'];
      }
    }
  }

  postMessage(msg: any) {
    if (this.frame != null) {
      this.frame.contentWindow?.postMessage(JSON.stringify(msg), '*');
    }
  }

  getData() {
    return this.data;
  }

  getTitle() {
    return this.title;
  }

  getFrameStyle() {
    return this.frameStyle + ';left:' +
        document.body.scrollLeft + 'px;top:' +
        document.body.scrollTop + 'px;';
  }

  getFrameUrl() {
    let url = this.drawDomain + '?proto=json&spin=1';

    if (this.ui != null) {
      url += '&ui=' + this.ui;
    }
  
    if (this.libraries != null) {
      url += '&libraries=1';
    }
  
    if (this.config != null) {
      url += '&configure=1';
    }
  
    if (this.urlParams != null) {
      url += '&' + this.urlParams.join('&');
    }
  
    return url;
  }

  createFrame(url: string, style: string) {
    const frame = document.createElement('iframe');
    frame.setAttribute('frameborder', '0');
    frame.setAttribute('style', style);
    frame.setAttribute('src', url);
    return frame;
  }

  setStatus(messageKey: string, modified: boolean) {
    this.postMessage({ action: 'status', messageKey: messageKey, modified: modified });
  }

  configureEditor() {
    this.postMessage({ action: 'configure', config: this.config });
  }

  initializeEditor() {
    this.postMessage({
      action: 'load', autosave: 1, saveAndExit: '1',
      modified: 'unsavedChanges', xml: this.getData(),
      title: this.getTitle()
    });
    this.setWaiting(false);
    this.setActive(true);
    this.initialized();
  }

  save(data: string, draft: boolean, elt: HTMLElement) {
    this.done(data, draft, elt);
  }
  getElementData(elem: HTMLElement | null): string {
    const name = elem?.nodeName.toLowerCase();

    return elem?.getAttribute((name === 'svg') ? 'content' : ((name === 'img') ? 'src' : 'data')) || '';
  }

  setElementData(elem: HTMLElement, data: string) {
    const name = elem.nodeName.toLowerCase();

    if (name === 'svg') {
      elem.outerHTML = atob(data.substring(data.indexOf(',') + 1));
    } else {
      elem.setAttribute((name === 'img') ? 'src' : 'data', data);
    }

    return elem;
  }
  done(data?: string, draft?: boolean, elt?: HTMLElement){
    
  }
  initialized(){
    console.log('El editor se ha inicializado correctamente.');
  }
}

