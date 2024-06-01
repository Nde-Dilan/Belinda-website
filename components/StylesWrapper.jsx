import React from 'react'
import Style from './Style';

import "../app/globals.css";
import "../styles/style.css";
import "../styles/StylesWrapper.css";



const StylesWrapper = ({products}) => {
  return (
    <div className="maylike-products-wrapper">
    <h2 className='maylike-products-header'>CHOOSE YOURS</h2>
    <div className="marquee">
      <div className="maylike-products-container track">
        {products.map((item) => (
          <Style key={item._id} {...item} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default StylesWrapper;