import React, { useState } from "react";

import SideBar from "./components/Sidebar";
import Schedule from "./components/Schedule";

import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState(<Schedule />);

  return (
    <div className="container">
      <SideBar
        renderComponent={(componentName) => {
          setActiveComponent(componentName);
        }}
      />
      {activeComponent}
    </div>
  );
}

export default App;
