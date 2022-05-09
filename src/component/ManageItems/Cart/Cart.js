import React from 'react';

import './Cart.css'

const Cart = ({ items }) => {
      const { name, img, stock, price, saplair } = items;



      return (
            <div className='cart'>
                  <img className='w-100' src={img} alt="" />
                  <h3>{name}</h3>
                  <h4>Price $ {price}</h4>
                  <h4>Stack : {stock}</h4>
                  <h4>Supplier : {saplair}</h4>


            </div>
      );
};

export default Cart;