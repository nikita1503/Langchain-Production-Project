import React, { useEffect, useContext } from "react";
import useAppContextValue from "./ context/useAppContextValue";
import AppContext from "./ context/AppContext";

import AgentPage from "./components/AgentPage/AgentPage";

const App = () => {
  const appContextValue = useAppContextValue();

  return (
    <div className="App">
        <AppContext.Provider value={appContextValue}>
            <AgentPage/>
        </AppContext.Provider>
    </div>
  );
};

export default App;
