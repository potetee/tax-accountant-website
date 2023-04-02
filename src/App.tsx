import React from 'react';
import Header from './component/Header/Header';
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from './AppRoutes';
import Footer from "./component/Footer/Footer";


function App() {
  return (
      <Router>
        <Header/>
          <main>
            <AppRoutes/>
          </main>
          <Footer/>
      </Router>
  );
}

export default App;
