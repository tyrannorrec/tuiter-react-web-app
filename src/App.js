import React from 'react';
import {BrowserRouter, HashRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Assignment7 from "./labs/a7";

library.add(fas);

function App() {
  return (
      <HashRouter>
          <div className="container">
              <Routes>
                  <Route path="/*" element={<Labs/>}/>
                  {/*<Route path="/hello" element={<HelloWorld/>}/>*/}
                  <Route path="/tuiter/*" element={<Tuiter/>}/>
                  <Route path="/tuiter" element={<Navigate to="/tuiter/home" replace />}/>
              </Routes>
          </div>
      </HashRouter>
  );
}

export default App;
