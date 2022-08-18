import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/index'
import '../Cart/Carrito.css'


const Header = () => {
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu
  const [carrito] = value.carrito

  const toogleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header>
      <Link to='/'>

      </Link>
      <div className='menu'>
        <box-icon name='menu'></box-icon>
      </div>
      <a href='#'></a>
      <ul >
        <li >
          <Link to='/'>INICIO</Link>
        </li>
        <li>
          <Link to='/shows'>SHOWS</Link>
        </li>
      </ul>
      <div className='cart' onClick={toogleMenu}>
        <box-icon name='cart'></box-icon>
        <span className='item__total'> {carrito.lenght}</span>
      </div>
    </header>
  )
}

export default Header
