import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Page2EditUser = () => {

    let [users, setUsers] = useState([])
    let { id } = useParams();
    // console.log(id);


    // const { data: users = [], refetch } = useQuery({
    //     queryKey: ['sUser'],
    //     queryFn: async () => {
    //         let res = await fetch(`http://localhost:3000/users/${id}`)
    //         let usersData = res.json();

    //         return usersData
    //     }
    // })

    useEffect(() => {
        fetch(`https://jt-1-server.vercel.app/users/${id}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])






    let handleSubmit = event => {

        event.preventDefault()

        let name = event.target.name.value
        let email = event.target.email.value
        let phone = event.target.phone.value

        let data = { name, email, phone }

        fetch(`https://jt-1-server.vercel.app/updateUser/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(data1 => {
                if (data1.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${data.name} is updated successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        console.log(data);

    }







    return (
        <div className='text-center container mx-auto my-2'>
            <h1 className='text-xl font-semibold'>Update User Information</h1>
            <div className="w-96 mx-auto mt-10">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            name='name'
                            defaultValue={users?.name}
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
                            name='email'
                            defaultValue={users.email}
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
                            name='phone'
                            defaultValue={users.phone}
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

export default Page2EditUser;