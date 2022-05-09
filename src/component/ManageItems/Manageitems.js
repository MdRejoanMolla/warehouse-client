import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import './ManageItems.css'

const Manageitems = () => {
      const [items, setItems] = useState([]);
      useEffect(() => {
            fetch("manageItems.json")
                  .then(res => res.json())
                  .then(data => setItems(data))
      }, [])

      return (
            <div className='container'>
                  <h1 className='text-primary'>Our Manage Items</h1>
                  <div className='items-container '>
                        {
                              items.map(data => <Cart key={data.id} items={data}></Cart>)
                        }

                  </div>

            </div>
      );
}
export default Manageitems;