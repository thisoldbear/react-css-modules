import React from "react";
import classnames from "classnames/bind";

import ExampleFive from "../ExampleFive/ExampleFive";

import css from "./ExampleSix.module.scss";
const styles = classnames.bind(css);

/**
 * Example Six - Overriding
 *
 * Here we can apply styles from ExampleSix.module.scss
 * onto <ExampleFive />
 */

const ExampleSix = ({ rounded, inverted, className }) => (
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
      <h2>Example Six - Overriding</h2>

      <ExampleFive className={styles("example__nested")} />

      <ExampleFive className={styles("example__nested")} />

      <ExampleFive className={styles("example__nested")} />
    </div>
  </div>
);

export default ExampleSix;
