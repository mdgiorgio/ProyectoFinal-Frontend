import React, { useContext} from 'react'
import { DataContext } from '../context/index'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import '../Cart/Carrito.css'

export const Carrito = () => {
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu
  const [carrito, setCarrito] = value.carrito
  const [total] = value.total
  // const [buy, setBuy] = useState('')

  const toggleMenu = () => {
    setMenu(false)
  }

  const handleBuyClick = (e) => {
      e.preventDefault()
      console.log(carrito)

    }
    

  const resta = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1)
      }
      setCarrito([...carrito])
    })
  }

  const suma = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1
      }
      setCarrito([...carrito])
    })
  }

  const removeShow = (id) => {
    if (window.confirm('¿Usted quiere suspender su compra?')) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1
          carrito.splice(index, 1)
        }
      })
      setCarrito([...carrito])
    }
  }

  return (
    <Accordion className='show' sx={{ margin: '1rem' }}>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography variant='h5' component='h2'>
          Tu carrito
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="carrito__center">
        {carrito.length === 0 ? (
          <Typography variant='h4' component='h2' textAlign='center'>
            Carrito sin entradas
          </Typography>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            {carrito.map((show) => (
              <Card className='carrito__item' sx={{ display: 'flex' }}>
                <Box  sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent className="price"sx={{ flex: '1 0 auto' }}>
                    <Typography component='div' variant='h5'>
                      {show.title}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    >
                      {show.category}
                    </Typography>
                  </CardContent>
                  <Box  
                    sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
                  >
                    <CardActions>
                      <IconButton sx={{type: 'solid'}} onClick={() => resta(show.id)}>
                        <RemoveIcon />
                      </IconButton>
                      <Typography className="cantidad"
                       variant='h6'>
                        {show.cantidad}
                      </Typography>
                      <IconButton className="up-arrow" onClick={() => suma(show.id)}>
                        <AddIcon />
                      </IconButton>
                    </CardActions>
                  </Box>
                </Box>
                <CardMedia
                  component='img'
                  sx={{ width: 150, height: 150, objectFit: 'contain' }}
                  image={show.image}
                  alt={show.title}
                />
                <IconButton  className="remove__item" 
                  onClick={() => removeShow(show.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            ))}
          </Box>
        )}
        <Box className="carrito__footer" sx={{ display: 'flex', flex: 'center', flexDirection: 'column', gap: '1rem' }}>
          <Typography  variant='h5' textAlign='right'>
            Total: ${total}
          </Typography>
          <Grid  container justifyContent='flex-end'>
            <Button className="btn" variant='contained' onClick={handleBuyClick} align='right'>
              Pagar
            </Button>
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
  }
