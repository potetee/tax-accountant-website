import React from 'react';
import Header from './component/Header/Header';
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from './AppRoutes';
import Footer from "./component/Footer/Footer";
import {Provider} from "react-redux";
import store from "./store/store";


function App() {
  return (
      <Provider store={store}>
      <Router>
        <Header/>
          <main>
            <AppRoutes/>
          </main>
          <Footer/>
      </Router>
      </Provider>
  );
}

export default App;
