import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateItem.css'

const UpdateItem = () => {
      const { manageItemId } = useParams();
      const [updateItem, setUpdateItem] = useState({});
      const { register } = useForm();
      const navigate = useNavigate();
      let addStock = {}
      useEffect(() => {
            const url = `https://hidden-mountain-97145.herokuapp.com/manageItem/${manageItemId}`;
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

      const handleUpdate = id => {
            const url = `https://hidden-mountain-97145.herokuapp.com/manageItem/${id}`;
            fetch(url, {
                  method: "update",

            })
                  .then(res => res.json())
                  .then(data => {
                        const remaining = updateItem.filter(updateItem => updateItem._id !== id)
                        console.log(data)
                        setUpdateItem(remaining)
                  })



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
                        <form className='d-flex flex-column'>
                              <input className='mb-4' placeholder='Quantity' type="number" {...register("stock")} />

                              <input onClick={() => handleUpdate(updateItem._id)} className='mb-3' type="submit" value='addItem' />
                              <input className='mb-3' type="submit" value='Delivered' />
                              <input onClick={() => navigateInventories()} className='mb-3' type="submit" value='Manage Inventories' />
                        </form>
                  </div>
            </div>
      )
};


export default UpdateItem;