import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppStack from "./AppStack";
import { UserProvider } from "./Context/UserContext";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <DataProvider>
          <AppStack />
        </DataProvider>
      </UserProvider>
    </div>
  );
}

export default App;
