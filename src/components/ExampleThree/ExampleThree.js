import React from "react";
import classnames from "classnames/bind";

import css from "./ExampleThree.module.scss";
const styles = classnames.bind(css);

/**
 * Example Two - CSS Modules & Classnames
 *
 * Classnames is a utility for "conditionally joining classNames together"
 * https://github.com/JedWatson/classnames
 *
 * In a nutshell, it allows us to bind and scope selectors, whilst also
 * using the `.kebab-case` selector syntax we're used to.
 *
 * One advantage of this would be on a "hybrid" site, where some components
 * are regular html and others are rendered by React. We can use the same stylesheet for both.
 *
 * There's nothing wrong with the `.camelCase` syntax from example two,
 * but a benefit BEM like syntax brings is readability and familiarity.
 */

const ExampleThree = () => (
  <div className={styles("example")}>
    <div className={styles("example__inner")}>
      <h2>Example Three</h2>
      <p>CSS Modules &amp; Classnames</p>
    </div>
  </div>
);

export default ExampleThree;
