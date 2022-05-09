import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
      const { register, handleSubmit } = useForm();
      const onSubmit = data => console.log(data);
      return (
            <div className='w-50 mx-auto'>
                  <h2>Please add Item</h2>
                  <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("Name", { required: true, maxLength: 20 })} />
                        <input {...register("supplierName", { required: true, maxLength: 20 })} />
                        <input {...register("description")} />
                        <input type="number" {...register("price")} />
                        <input type="number" {...register("stack")} />
                        <input type="submit" />
                  </form>
            </div>
      );
};

export default AddItem;