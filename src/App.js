import React from "react"
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ShowsList from "./components/Shows/ShowList";
import { Routes, Route } from "react-router-dom";
import { Carrito } from "./components/Cart/Carrito";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AboutUs from "./components/AboutUs/AboutUs";
import Ticket from "./components/Cart/ticket"

function App () {
  const [shows, setShows] = React.useState([]);

  return(
    <Box className="App">
      <CssBaseline />
      <Header />
      <NavBar setShows={setShows}/>
      <Carrito/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/shows" exact element={<ShowsList shows={shows}/>}/>
        <Route path="/AboutUs" exact element={<AboutUs/>}/>
        <Route path="/entradas" exact element={<Ticket/>}/>
        <Route path="*" element={<h1>ERROR</h1>} />
      </Routes>
    </Box>    
  )
}
export default App; 
