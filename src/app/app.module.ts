import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaContenidosComponent } from './tabla-contenidos/tabla-contenidos.component';
import { ContenidoTutorialComponent } from './contenido-tutorial/contenido-tutorial.component';
import { HeaderComponent } from './contenido-tutorial/header/header.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BasicoComponent } from './contenido-tutorial/dificultades/basico/basico.component';
import { MedioComponent } from './contenido-tutorial/dificultades/medio/medio.component';
import { AdvancedComponent } from './contenido-tutorial/dificultades/advanced/advanced.component';
import { SelectorDificultadComponent } from './contenido-tutorial/dificultades/selector-dificultad/selector-dificultad.component';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    TablaContenidosComponent,
    ContenidoTutorialComponent,
    HeaderComponent,
    BasicoComponent,
    MedioComponent,
    AdvancedComponent,
    SelectorDificultadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    MatIconModule,
    MessagesModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
