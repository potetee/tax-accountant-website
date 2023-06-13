import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import MainContent from "./component/MainContent/MainContent";


function App() {
  return (
      <Provider store={store}>
        <Router>
            <MainContent/>
        </Router>
      </Provider>
  );
}

export default App;
