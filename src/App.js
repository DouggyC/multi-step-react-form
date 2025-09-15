import React from "react";
import "./App.css";
import UserForm from "./components/UserForm";

import { GlobalProvider } from "./context/GlobalState";

const App = () => (
  <GlobalProvider>
    <div className="App">
      <form>
        <UserForm />
      </form>
    </div>
  </GlobalProvider>
);

export default App;
