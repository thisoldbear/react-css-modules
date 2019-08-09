import React from "react";
import classnames from "classnames/bind";

import css from "./ExampleFour.module.scss";
const styles = classnames.bind(css);

/**
 * Example Four - CSS Modules & Classnames & Props
 *
 * Classnames can also allow us to add class names
 * conditionally, based on props
 */

const ExampleFour = ({ rounded, inverted }) => (
  <div
    className={styles("example", {
      "example--rounded": rounded,
      "example--inverted": inverted
    })}
  >
    <div className={styles("example__inner")}>
      <h2>Example Four</h2>
      <p>CSS Modules &amp; Classnames &amp; Props</p>
    </div>
  </div>
);

export default ExampleFour;
