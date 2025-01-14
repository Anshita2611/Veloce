# Veloce

Veloce is a React-based web application that showcases a car overview, a carousel of car images, a 360° view button, and a price calculator. The project uses various libraries and tools such as Vite, Tailwind CSS, Bootstrap, and React Slick.

## Table of Contents

- [Veloce](#veloce)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Components](#components)
    - [App](#app)
      - [Carousel](#carousel)
      - [Car Overview](#car-overview)
      - [Price Calculator](#price-calculator)
      - [View360Button](#view360button)
    - [Styling](#styling)
    - [Configuration](#configuration)
      - [ESLint](#eslint)
      - [Tailwind CSS](#tailwind-css)
      - [Vite](#vite)
      - [Scripts](#scripts)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Anshita2611/Veloce
   cd veloce
    ```
2. Navigate to the project directory:
    ```sh
    cd veloce
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To start the development server, run:
```sh
npm run dev
```
To build the project for production, run:
```sh
npm run build
```
To preview the production build, run:
```sh
npm run preview
```
## Project Structure
```sh
.gitignore
eslint.config.js
index.html
package.json
public/
src/
  App.css
  App.jsx
  assets/
  components/
    Carousel.jsx
    CarOverview.jsx
    PriceCalculator.jsx
    View360Button.jsx
  index.css
  main.jsx
  styles/
    Carousel.css
    CarOverview.css
    global.css
    PriceCalculator.css
    View360Button.css
tailwind.config.js
vite.config.js
```
## Components
### App
The main component that renders the entire application. It includes the following sections:

- Carousel
- Car Overview
- 360° View Button
- Price Calculator
#### Carousel
- A component that displays a carousel of car images using react-slick and slick-carousel.

#### Car Overview
- A component that displays details about a car, such as model, year, mileage, and price.

#### Price Calculator
- A component that calculates the price based on the number of invites and the duration of the event.

#### View360Button
- A component that displays a button for viewing a 360° view of the car. Currently, it shows an alert message.

### Styling
The project uses Tailwind CSS for utility-first styling and custom CSS files for component-specific styles.

- Global styles are defined in `global.css`.
- Component-specific styles are located in the `styles` directory.

### Configuration
#### ESLint
- The project uses ESLint for linting JavaScript and JSX files. The configuration is defined in `eslint.config.js`.

#### Tailwind CSS
- Tailwind CSS is configured in `tailwind.config.js`.

#### Vite
- Vite is used as the build tool and is configured in `vite.config.js`.

#### Scripts
- dev: Starts the development server.
- build: Builds the project for production.
- lint: Lints the code using ESLint.
- preview: Previews the production build.
