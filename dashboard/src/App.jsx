import { React, useState } from "react";
import publickRoutes from "./route/routes/pablicRoutes";
import Router from "./route/Router";

function App() {
  let [allRoutes, setAllRoutes] = useState([...publickRoutes]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
