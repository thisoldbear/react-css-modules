import React from "react";

import styles from "./ExampleTwo.module.scss";

/**
 * Example Two - CSS Modules
 *
 * Adding a CSS Modules stylesheet:
 * https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
 *
 * First we import the "css module" stylesheet (*.module.scss naming is important).
 *
 * We now have access to the selectors in ExampleTwo.module.scss
 * using dot notation i.e. `styles.containerInner`
 *
 * The selectors have to be in camelCase so we can use them,
 * so `styles.container-inner` won't work and will throw an error.
 *
 * This renders a class attribute that looks something like this:
 *
 * `<div class="{filename}_{classname}__{hash}"> -> <div class="ExampleTwo_exampleTwo__U_GqM">`
 *
 * The selectors could also be any name i.e. `.container` or `.inner`, after all, they're scoped right?
 *
 * I would however recommend namespacing them as it makes:
 * - things easier to reason about (imagine having 5 stylsheets open, each with `.container` in them)
 * - the styles portable (potentially for use outside of React) because there aren't generic selector names
 * - and more common sense reasons I'm sure you can think of...
 */

const ExampleTwo = () => (
  <div className={styles.example}>
    <div className={styles.exampleInner}>
      <h2>Example Two</h2>
      <p>CSS Modules</p>
    </div>
  </div>
);

export default ExampleTwo;
