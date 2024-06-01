import React from 'react'
import "../styles/style.css";


const Style = ({name,image,price,}) => {
    return (
      <div>
       <div className='product-card'>
          <img src={image} width={250} height={250} alt="headphones" className='product-image' />
          <p className='product-name'>{name}</p>
          <p className='product-price dark:text-slate-100 font-bold'>{price} XAF</p>
       </div>
      </div>
    )
  }



export default Style;