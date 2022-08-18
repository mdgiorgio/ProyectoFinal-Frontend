//a chekear
import React, { useState, useEffect, createContext } from "react";
// import Data from "./Data/Data"
import axios from 'axios';

export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [shows, setShows] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  console.log(carrito)

  useEffect(() => {
    // const show = Data.items
    // if (show) {
    //   setShows(show)
    // } else {
    //   setShows([])
    // }
    axios
    .get("http://localhost:8000/api/publication",{
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            'Content-Type': 'application/json'
        }
    })
    .then((res) =>setShows (res.data))
    .catch((err) => err.response.data)
  }, [])

  const addCarrito = (id) => {
    const check = carrito.every(item => {
      return item.id !== id;
    })
    if (check) {
      const data = shows.filter(show => {
        return show.id === id
      })
      setCarrito([...carrito, ...data])
    } else {
      alert("Tu entrada se ha agregado al carrito")
    }
  }

  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito')
    )
    if (dataCarrito) {
      setCarrito(dataCarrito)
    }
   
  }, [])

  useEffect(() => {
    localStorage.setItem('dataCarrito', JSON.stringify(carrito))
  }, [carrito])

  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + (item.price * item.cantidad);
      }, 0)
      setTotal(res)
    }
    getTotal()
  }, [carrito])

  const value = {
    shows: [shows],
    menu: [menu, setMenu],
    addCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal]
  }

  //en add carrito le agregue el corchete 
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider;