import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {
      const { register, handleSubmit } = useForm();
      const onSubmit = data => {
            const url = `http://localhost:5000/manageItem`;
            fetch(url, {
                  method: "post",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(data),
            })
                  .then(res => res.json()
                        .then(result => {

                        })
                  )


      };
      return (
            <div className='w-50 mx-auto'>
                  <h2>Please add Item</h2>
                  <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-3' placeholder='NAME' {...register("name", { required: true, maxLength: 20 })} />

                        <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                        <input className='mb-3' placeholder='Quantity' type="number" {...register("stock")} />
                        <input className='mb-3' placeholder='Photo' type="text" {...register("img")} />
                        <input className='mb-3' placeholder='SupplierName' {...register("saplair", { required: true, maxLength: 20 })} />
                        <textarea className='mb-3' placeholder='Description' {...register("description")} />
                        <input className='mb-3' type="submit" value='addItem' />
                  </form>
            </div>
      );
};

export default AddItem;