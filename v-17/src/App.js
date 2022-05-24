import React, { version } from "react";
import Charts from "./Charts";

const App = () => (
  <div>
    <h1>React: {version} with Fusion Charts: 3.17</h1>
    <Charts />
  </div>
);

export default App;
