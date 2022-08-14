import React from "react" 
import IMG from "../Shows/img/Justin_Bieber.jpg"; //ACA VA LA IMAGEN DEL show

export const ShowItem = ({key,title,image,category,price, id}) => {
    {
        console.log(image)
    }

  return(
    <div>
        <div className="show">
                 <a href="#">
                   <div className="show__img">
                     <img src={image.default} alt={title}/>
                   </div>
                  </a>
                </div>
            <div className="show__footer">
              <h1>{title} </h1>
              <p> {category}</p>
              <p className="price">{price} </p>
          </div>
          <div className="buttom">
            <button className="btn">carrito</button>
            <div>
              <a href="#" className="btn"> 22/10/22 </a> 
            </div>
          </div>
          <div className="show">
                 <a href="#">
                   <div className="show__img">
                     <img src={IMG} alt=""/>
                   </div>
                  </a>
                </div>
            <div className="show__footer">
              <h1>Miley Cyrus </h1>
              <p>category?/o evento +12</p>
              <p className="price">$600 </p>
          </div>
          <div className="buttom">
            <button className="btn">CARRITO</button>
            <div>
              <a href="#" className="btn"> 30/10/22 </a> 
            </div>
          </div>

          <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Pepa Pig </h1>
        <p>category?/o evento +3</p>
        <p className="price">$100 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 12/12/22 </a> 
       </div>
         </div>



    </div>
  )
}
//OJO CON EL DIV QUE ABARCA TODO, QUIZAS NO HAY QUE PONERLO