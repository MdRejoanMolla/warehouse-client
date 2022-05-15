import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Item = () => {
      const [item, setItem] = useState([]);
      useEffect(() => {
            fetch("https://hidden-mountain-97145.herokuapp.com/manageItem")
                  .then(res => res.json())
                  .then(data => setItem(data))
      }, [])
      return (
            <div className='container'>
                  <h1 className='text-primary'>Our Manage Items</h1>
                  <div className='items-container '>
                        {
                              item.map(data => <Cart key={data._id} items={data}></Cart>).slice(0, 6)
                        }

                  </div>

            </div>
      );
};

export default Item;