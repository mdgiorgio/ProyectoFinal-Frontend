import React from 'react'
import "../../assets/styles/aboutUs.css"
import imgA from '../../assets/img/AboutUS.png'

const AboutUs = ()=>{
    
    return (
    <section>
        
        <div >
        <img src={imgA} alt="aboutus" className="imgA" />
        </div>
        <div className="grid">
            <div className="somos">
                <h2 className='h2'>Bienvenidos a ShowMania, una plataforma donde te brindaremos a los mejores artistas del momento</h2>
                <p className='p'>Contamos con 100.000 clientes de compras aseguradas</p>
                <h3></h3>
            </div>
            <div className="mision">
                 
    
                <p></p>
            </div>
            <div className="vision">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <footer>
            <div class="redes-sociales">
            <h3></h3>
                <ul className='redes'>
                    <li>Mail: showmania@gmail.com</li>
                    <li>Celular: 1145228191</li>
                    <li>Instagram: @ShowMania.Arg</li>
                </ul>
            </div>
        </footer>
    </section>
    
    )
}

export default AboutUs