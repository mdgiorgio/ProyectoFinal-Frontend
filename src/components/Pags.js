//encardado de reoutear el proyecto
import React from "react"
import {Switch, Route} from "react-router-dom";
import {Inicio} from "./Inicio/index";
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






