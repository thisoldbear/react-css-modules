import React from "react";

import "./App.scss";

import ExampleOne from "./components/ExampleOne/ExampleOne";
import ExampleTwo from "./components/ExampleTwo/ExampleTwo";
import ExampleThree from "./components/ExampleThree/ExampleThree";
import ExampleFour from "./components/ExampleFour/ExampleFour";
import ExampleFive from "./components/ExampleFive/ExampleFive";
import ExampleSix from "./components/ExampleSix/ExampleSix";

function App() {
  return (
    <>
      <h1>CSS Modules</h1>

      <p>
        Examples of using{" "}
        <a href="https://github.com/css-modules/css-modules">CSS Modules</a>{" "}
        with <a href="https://github.com/JedWatson/classnames">Classnames</a> to
        add scoped and conditionally overridable styles.
      </p>

      <ExampleOne />

      <ExampleTwo />

      <ExampleThree />

      <ExampleFour />

      <ExampleFour rounded />

      <ExampleFour inverted />

      <ExampleFour rounded inverted />

      <ExampleFive />

      <ExampleSix />
    </>
  );
}

export default App;
