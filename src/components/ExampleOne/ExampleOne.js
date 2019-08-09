import React from "react";

import "./ExampleOne.scss";

/**
 * Example One - No Scoping
 *
 * Styles are not scoped, much like "traditional" css.
 */

const ExampleOne = () => (
  <div className="example">
    <h2>Example One</h2>
    <p>No Scoping</p>
  </div>
);

export default ExampleOne;
