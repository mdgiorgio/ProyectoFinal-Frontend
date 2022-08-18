//encardado de reoutear el proyecto
import React from "react"
import {Switch, Route} from "react-router-dom";
import {Inicio} from "./Inicio/index";
//FIJENSE SI LLAMAMOS BIEN A LA CARPETA DE INICIO, ACUERDENSE QUE ES HOME
import { ShowsList } from "./Shows";


export const Pags = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/shows" exact component={ShowsList}/>
            </Switch>
        </section>
    )
}