import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppIcon } from "./components/AppIcon";
import { AppIconsContainer } from "./components/AppIconsContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppIconsContainer />
    </div>
  );
};

export default App;
