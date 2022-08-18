import React from 'react'
import "../../assets/styles/aboutUs.css"
import imgA from '../../assets/img/AboutUS.png'

const AboutUs = () => {

    return (
        <section>

            <div >
                <img src={imgA} alt="aboutus" className="imgA" />
            </div>
            <div className="grid">
                <div className="somos">
                    <h2 className='h2'>Bienvenidos a ShowMania, una plataforma donde te brindaremos a los mejores artistas del momento</h2>
                    <p className='p'>Contamos con 100.000 clientes de compras aseguradas
                        Podes comprar en nuestra plataforma de manera segura. Luego de realizar tu compra podras ver en la opción "Mis Entradas" tu entrada con la que ingresaras al espectaculo.
                        Ante cualquier consulta, no dudes en contactarte con nosotros.</p>
                </div>
            </div>
        </section>
    )
}



export default AboutUs