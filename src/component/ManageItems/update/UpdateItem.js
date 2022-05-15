import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateItem.css'

const UpdateItem = () => {
      const { manageItemId } = useParams();
      const [updateItem, setUpdateItem] = useState({});
      const { register, handleSubmit } = useForm();
      const navigate = useNavigate();
      let addStock = {}
      useEffect(() => {
            const url = `http://localhost:5000/manageItem/${manageItemId}`;
            fetch(url)
                  .then(res => res.json())
                  .then(data => setUpdateItem(data));
      }, [])
      const stock = addStock[1];
      if (stock) {
            const newQuantity = stock - 1;
            addStock[1] = newQuantity;
      }
      const navigateInventories = event => {
            navigate('/inventories');
      }

      const onSubmit = data => {
            const url = `http://localhost:5000/manageItem/${manageItemId}`;
            fetch(url, {
                  method: "post",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(data),
            })
                  .then(res => res.json()
                        .then(result => {
                              console.log(result);
                        })
                  )

            console.log(data)
      };

      return (
            <div className='update-content'>
                  <div>
                        <img className='w-100' src={updateItem.img} alt="" />
                        <h3>{updateItem.name}</h3>
                        <h5>{updateItem.description}</h5>
                        <h4>Price $ {updateItem.price}</h4>
                        <h4>Stack : {updateItem.stock}</h4>
                        <h4>Supplier : {updateItem.saplair}</h4>
                        <button className='btn btn-success mb-2'>Deliver</button>
                  </div>
                  <div className="update">
                        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                              <input className='mb-4' placeholder='Quantity' type="number" {...register("stock")} />

                              <input className='mb-3' type="submit" value='addItem' />
                              <input className='mb-3' type="submit" value='Delivered' />

                        </form>

                        <input onClick={() => navigateInventories()} className='mb-3' type="submit" value='Delivered' />

                  </div>
            </div>
      )
};


export default UpdateItem;