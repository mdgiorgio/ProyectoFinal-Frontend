//import logo from './logo.svg';
import React from "react"
import {Header} from "./components/Header";
//import {ShowsList} from "./components/Shows/index";
import "boxicons";
//import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import {Pags} from "./components/Pags";



import {DataProvider} from "./components/context/DataProviderHooks"


function App () {
  return(
    <DataProvider>
     <div className='App'>
      <Router>
      <Header />
      <Pags/>
      </Router>
    </div>
    </DataProvider>
    
    
  )
}

export default App; 
