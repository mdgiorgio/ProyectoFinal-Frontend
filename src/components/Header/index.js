
//-------------ACA EL HEADER ES LA PARTE DE ARRIBA--------

import React from "react"
//import {Showmania} from "./Shows/img"; //--------ACA ESTA EL PROBLEMA DE LA FOTO del logo 
import { Link } from "react-router-dom";

export const Header = () => {
    return (// ----------------ACA VA EL MENU 
       <header>
        <Link to="/">
         <div className="logo">
          <img src={require("../Shows/img/Logo")} alt="logo" width="150" />
         </div>
        </Link>
        <div className-="menu"> 
            <box-icon name="menu"></box-icon> 
        </div>
          <a href="#"></a>
       <ul>
         <li>
            <Link to="/" >INICIO</Link>
         </li>
         <li> 
         <Link to="/shows">SHOWS</Link>
         </li>
         </ul> 
       <div className="cart" > 
        <box-icon name="cart"></box-icon> 
        <span className="item__total"> </span> 
      </div> 
       </header>
    );
};
//---------------------- EL CART ES EL CARRITO DE COMPRA