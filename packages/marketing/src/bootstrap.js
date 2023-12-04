import React from "react";
import reactDom from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate }) => {
  console.log("here", onNavigate);
  const history = createMemoryHistory();

  // If onNavigate is provided, set up the listener
  history.listen(onNavigate);

  reactDom.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  mount(devRoot);
}

export { mount };
