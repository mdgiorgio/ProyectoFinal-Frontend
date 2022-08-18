import React, { useContext } from 'react'
import { DataContext } from '../context/index'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import '../Cart/Carrito.css'


const ShowItem = ({ title, image, category, price, id }) => {
  const value = useContext(DataContext)
  const addCarrito = value.addCarrito

  return (
    <Card className="show" sx={{ maxWidth: 400}}>
      <CardMedia className="show__img" component='img' height='360' image={image} alt={title} />
      <CardContent className="show__footer">
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {category}
        </Typography>
        <Typography className="price" variant='body2'>${price}</Typography>
      </CardContent>
      <CardActions>
        <Grid className="buttom" container justifyContent='center'>
          <Button className="btn"
            variant='outlined'
            size='small'
            onClick={() => addCarrito(id)}
          >
            Agregar al carrito
          </Button>
        </Grid>
      </CardActions>
    </Card>
  )
}
export default ShowItem
