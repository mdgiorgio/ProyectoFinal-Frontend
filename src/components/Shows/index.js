import React, {useContext}from "react";
//import {IMG} from "./" //ACA VA LA IMAGEN DEL show
import { DataContext} from "./components/context/DataProviderHooks";
import {ShowItem} from "./ShowItem";
//----------------------fijarse re corregir buttom a bottom, no confunfirse----

//por ahora a todos les puse una foto en comun, despues elegimos lo que va en cada uno
export const ShowsList = () => {

    const value = useContext(DataContext)
    const [shows] = value.shows

    console.log(shows)

    return (
        <div>
            <h1 className="title"> Eventos disponibles</h1>
              <div className="shows"> 
              {
                shows.map(show =>(
                    <ShowItem 
                        key={show.id}
                        title={show.title}
                        image={show.image}
                        category={show.category}
                        price={show.price}
                        id={show.id}
                        
                    />
                ))
              }
            
              
              </div>

           </div>

    );
};