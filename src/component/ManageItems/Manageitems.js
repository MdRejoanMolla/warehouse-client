import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import './ManageItems.css'

const ManageItems = () => {
      const [items, setItems] = useState([]);
      useEffect(() => {
            fetch("http://localhost:5000/manageItem")
                  .then(res => res.json())
                  .then(data => setItems(data))
      }, [])

      return (
            <div className='container'>
                  <h1 className='text-primary'>Our Manage Items</h1>
                  <div className='items-container '>
                        {
                              items.map(data => <Cart key={data._id} items={data}></Cart>)
                        }

                  </div>

            </div>
      );
}
export default ManageItems;