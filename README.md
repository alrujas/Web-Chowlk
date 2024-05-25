# Chowlk Tutoriales

## Descripción

Este proyecto de Angular utiliza varias librerías como PrimeNG, AOS (Animate On Scroll), y Angular Material para íconos (MatIcon). A continuación, se detallan los pasos para desplegar el proyecto y cómo realizar modificaciones en los apartados y ejercicios.

## Requisitos

- Node.js (versión recomendada: 14.x o superior)
- Angular CLI (versión recomendada: 12.x o superior)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar las dependencias:**

   ```bash
   npm install
   ```

## Despliegue

1. **Desarrollo:**

   Para iniciar el servidor de desarrollo, usa el siguiente comando:

   ```bash
   ng serve
   ```

   Luego, abre tu navegador y navega a `http://localhost:4200`.

2. **Producción:**

   Para compilar el proyecto para producción, usa el siguiente comando:

   ```bash
   ng build --prod
   ```

   Los archivos compilados se encontrarán en el directorio `dist/`.

## Librerías Utilizadas

- **PrimeNG:** Para componentes de UI.
- **AOS (Animate On Scroll):** Para animaciones al hacer scroll.
- **Angular Material (MatIcon):** Para íconos.

### Instalación de Librerías

Las librerías mencionadas ya están incluidas en el `package.json`. Si necesitas instalarlas nuevamente, usa los siguientes comandos:

```bash
npm install primeng --save
npm install @angular/cdk --save
npm install @angular/material --save
npm install aos --save
npm install primeicons --save
```

## Modificaciones

### Añadir Apartados

Para añadir nuevos apartados en el proyecto debes modificar los siguientes archivos:

1. **Tabla de contenidos:**

   Ve al archivo HTML de la tabla de contenidos y dentro de ella busque la dificultad donde quieres introducir el apartado. En ella introduce el apartado que quieres siguiendo el contenido que ya tiene la tabla de contenidos.

2. **Contenido Tutorial:**

   Añade el nuevo apartado en el componenente de la dificultad correspondiente dentro de la carpeta del contenido tutorial. Añade el contenido del apartado a la altura correspondiente en la que se haya introducido en la tabla de contenidos.

### Modificar o añadir ejercicios

Para modificar un ejercicio existente, sigue estos pasos:

1. **Archivo HTML del Componente de la Dificultad Correspondiente:**

   Localiza el archivo HTML del componente correspondiente a la dificultad del ejercicio que deseas modificar. Realiza los cambios necesarios en este archivo para modificar el enunciado del ejercicio, o si quieres introducir uno nuevo añade el nuevo ejercicio teniendo en cuenta los ids de los diagramas de los ejercicios.

2. **Tabla contenidos:**

   Solo si añades un nuevo ejercicio tienes que ir a la tabla de contenidos y añadir el nuevo apartado a la altura correspondiente en la dificultad deseada.

## Contacto

Si tienes alguna pregunta o problema, por favor, abre un issue en el repositorio o contacta con el equipo de desarrollo.
