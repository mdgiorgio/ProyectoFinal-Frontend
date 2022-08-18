import React from "react";
import { Routes, Route } from "react-router-dom";
import FormRegister from "./components/FormRegister/FormRegister"


function App () {
  return(
    <div className="App">
      {/* <CssBaseline /> */}
      {/* <Header />
      <NavBar setShows={setShows}/>
      <Carrito/> */}
      <Routes>
        <Route path="/register" exact element={<FormRegister/>}/>
    </Routes>
    </div>
  )
}

export default App