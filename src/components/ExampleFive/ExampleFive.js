import React from "react";
import classnames from "classnames/bind";

import css from "./ExampleFive.module.scss";
const styles = classnames.bind(css);

/**
 * Example Five - Classnames & Props & className
 *
 * Classnames can also allow us to add scoped classNames passed in from outside,
 * potentially to add a margin to components rendered in a list, or change a specific
 * style property
 */

const ExampleFive = ({ rounded, inverted, className }) => (
  <div
    className={styles(
      "example",
      {
        "example--rounded": rounded,
        "example--inverted": inverted
      },
      className
    )}
  >
    <div className={styles("example__inner")}>
      <h2>Example Five</h2>
      <p>Classnames &amp; Props &amp; className</p>
    </div>
  </div>
);

export default ExampleFive;
