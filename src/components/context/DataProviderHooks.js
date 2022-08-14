//a chekear
import React, {useState, useEffect, createContext} from "react";
import Data from "../context/Data/Data"
export const DataContext = createContext();

export const DataProvider = (props) => {
    const [shows, setShows] =useState([])

    useEffect(( ) => {
      const show = Data.items
        if (show) {
            
            setShows(show)
        }else{
            
        setShows([])
        }
        
    },[])

    const value = {
        shows : [shows]
    }
    
    return (
            <DataContext.Provider value={value}>
                {props.people}
            </DataContext.Provider>
    )
}