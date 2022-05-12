import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Cart.css'

const Cart = ({ items }) => {
      const { _id, name, img, stock, price, saplair, description } = items;
      const navigate = useNavigate();

      const navigateToItemDetails = id => {
            navigate(`/manageItem/${id}`);
      }

      return (
            <div className='cart'>
                  <img className='w-100' src={img} alt="" />
                  <h3>{name}</h3>
                  <h5>{description}</h5>
                  <h4>Price $ {price}</h4>
                  <h4>Stack : {stock}</h4>
                  <h4>Supplier : {saplair}</h4>
                  <button onClick={() => navigateToItemDetails(_id)} className="btn btn-warning">UPDATE</button>


            </div >
      );
};

export default Cart;