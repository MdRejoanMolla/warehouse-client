import React from 'react';
import { useNavigate } from 'react-router-dom';

import useItems from '../hook/useItem';
import './Inventory.css';

const Inventory = () => {

      const navigate = useNavigate();
      const [items, setItems] = useItems();
      const handelDelete = id => {
            const proceed = window.confirm("are you sure?");
            if (proceed) {
                  const url = `https://hidden-mountain-97145.herokuapp.com/manageItem/${id}`;
                  fetch(url, {
                        method: "DELETE"
                  })
                        .then(res => res.json())
                        .then(data => {
                              const remaining = items.filter(item => item._id !== id)
                              console.log(data)
                              setItems(remaining)
                        })
            }
      }
      const navigateNewItem = event => {
            navigate('/addItem');
      }

      return (
            <div className='invent'>
                  {
                        items.map(item => <div>
                              <img className='w-100' src={item.img} alt="" />
                              <h3>{item.name}</h3>
                              <h5>{item.description}</h5>
                              <h4>Price $ {item.price}</h4>
                              <h4>Stack : {item.stock}</h4>
                              <h4>Supplier : {item.saplair}</h4>
                              <button className='mr-10' onClick={() => handelDelete(item._id)}>Delete</button>
                              <button onClick={() => navigateNewItem()} >Add New Item</button>

                        </div>)
                  }


            </div >
      );
};

export default Inventory;