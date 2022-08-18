import React from 'react'
import ShowItem from './ShowItem'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import '../Cart/Carrito.css'



export const ShowsList = ({ shows }) => {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography className="title" variant='h2' component='h1' textAlign='center' my={4}>
        Eventos disponibles
      </Typography>
      <Grid className="shows"
        container
        spacing={4}
        align='center'
      >
        {shows.map((show) => (
          <Grid item xs={12} sm={3} key={show.id}>
            <ShowItem
              key={show.id}
              title={show.title}
              image={show.image}
              category={show.category}
              price={show.price}
              id={show.id}
              cantidad={show.cantidad}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default ShowsList
