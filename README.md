# Chowlk Tutorials

## Description

This Angular project uses several libraries such as PrimeNG, AOS (Animate On Scroll), and Angular Material for icons (MatIcon). Below are the steps to deploy the project and how to make modifications to sections and exercises.

## Requisitos

- Node.js
- Angular CLI

## Instalación

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tu-repositorio.git
   cd your-repository
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Deployment

1. **Development:**

   To start the development server, use the following command:

   ```bash
   ng serve
   ```

   Then, open your browser and navigate to http://localhost:4200.

2. **Production:**

   To build the project for production, use the following command:

   ```bash
   ng build --prod
   ```

   The compiled files will be located in the dist/ directory.

## Libraries Used

- **PrimeNG:** For UI components.
- **AOS (Animate On Scroll):** For scroll animations.
- **Angular Material (MatIcon):** For icons.

### Library Installation

The mentioned libraries are already included in the package.json. If you need to install them again, use the following commands:

```bash
npm install primeng --save
npm install @angular/cdk --save
npm install @angular/material --save
npm install aos --save
```

## Modifications

### Adding Sections

To add new sections in the project, you need to modify the following files:

1. **Table of Contents:**

   Go to the HTML file of the table of contents and within it, find the difficulty level where you want to add the section. Introduce the section you want following the content already present in the table of contents.

2. **Tutorial Content:**

   Add the new section in the component of the corresponding difficulty within the tutorial content folder. Add the section content at the corresponding height where it was introduced in the table of contents.

### Modifying or Adding Exercises

To modify an existing exercise, follow these steps:

1. **HTML File of the Corresponding Difficulty Component:**

   Locate the HTML file of the component corresponding to the difficulty of the exercise you want to modify. Make the necessary changes in this file to modify the exercise statement, or if you want to introduce a new one, add the new exercise considering the IDs of the exercise diagrams.

2. **Table of Contents:**

   Only if you add a new exercise, go to the table of contents and add the new section at the corresponding height in the desired difficulty level.

## Contact

If you have any questions or issues, please open an issue in the repository or contact the development team.

Maria Poveda-Villalón (chowlk@delicias.dia.fi.upm.es)
