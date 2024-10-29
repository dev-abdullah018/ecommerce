import { React, useEffect, useState } from "react";
import publickRoutes from "./route/routes/pablicRoutes";
import Router from "./route/Router";
import { getRoutes } from "./route/routes";

function App() {
  let [allRoutes, setAllRoutes] = useState([...publickRoutes]);

  useEffect(()=>{
      const routes = getRoutes()
      setAllRoutes([...allRoutes, routes])
  },[])

  return <Router allRoutes={allRoutes} />;
}

export default App;
