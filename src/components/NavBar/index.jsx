import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Switch from '@mui/material/Switch'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import { NavLink, useLocation } from 'react-router-dom'
import data from '../context/Data/Data'
import '../NavBar/NavBar.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from '../../assets/img/Logoshow.png'

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    setSearchQuery(query)
  }

  return (
    <form>
      <TextField
        id='search-bar'
        className='text'
        onChange={(e) => setQuery(e.target.value)}
        label='Buscar show'
        variant='outlined'
        placeholder='Ingrese show...'
        size='small'
      />
      <IconButton type='submit' aria-label='search' onClick={handleClick}>
        <SearchIcon style={{ fill: 'black' }} />
      </IconButton>
    </form>
  )
}


const pages = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Shows',
    to: '/shows'
  },
  {
    name: 'Register',
    to: '/register'
  },
  {
    name: 'Sobre nosotros',
    to: '/AboutUs'
  },
  {
    name: 'Perfil',
    to: '/perfil'
  },
  {
    name: 'Mis entradas',
    to: '/entradas'
  }
]

const filterData = (query, { items }) => {
  if (!query) {
    return items
  } else {
    return items.filter((show) => show.title.toLowerCase().includes(query))
  }
}

export default function MenuAppBar({ setShows }) {
  const location = useLocation()
  const [auth, setAuth] = React.useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const dataFiltered = filterData(searchQuery, data)

  

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  React.useEffect(() => {
    setShows(dataFiltered)
  }, [dataFiltered])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='relative'
        sx={{
          bgcolor: 'rgb(239, 201, 239)',
          color: '#000',
          boxShadow: 'none'
        }}
      >
        <Box >
          <img className='logo'
            src={Logo}
            alt='logo'
          />
        </Box>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          SHOW MANIA
          </Typography>
          <Box
            style={{
              display: 'flex',
              alignSelf: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: 20,
              BorderColor: 'black'
            }}
          >
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Box>
          <Box>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {pages.map((page) => {
                return page.to !== location.pathname ? (
                  <MenuItem
                    key={page.name}
                    onClick={handleClose}
                    component={NavLink}
                    to={page.to}
                  >
                    <Typography
                      sx={{
                        color: 'black'
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ) : null
              })}
              <MenuItem
                control={
                  <Switch
                    checked={auth}
                    onChange={handleChange}
                    aria-label='login switch'
                  />
                }
                label={auth ? 'Logout' : 'Login'}
              >
                CERRAR SESIÓN
              </MenuItem>
            </Menu>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
