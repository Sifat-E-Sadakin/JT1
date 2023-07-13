import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Page2AddUser = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =  data =>{
        
           
                  fetch(`https://jt-1-server.vercel.app/addUser`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify(data),
                })
              
               .then(res => res.json())
               .then(data1=> {
                if(data1.acknowledged){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${data.name } is added successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
               })
            
        
    }

    return (
        <div>
            <div className="w-96 mx-auto mt-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            {...register("phone", { required: true })}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className='flex justify-center my-4'>
                <Link className='btn' to={'/'}>Home</Link>
                </div>
            </div>

        </div>
    );
};

export default Page2AddUser;