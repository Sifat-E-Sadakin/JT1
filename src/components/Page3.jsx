import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Page3 = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            let res = await fetch(`https://jt-1-server.vercel.app/users`)
            let usersData = res.json();
            return usersData
        }
    })

    return (
        <div className='container mx-auto text-center'>
            <h1 className='text-3xl font-semibold'>List of all User</h1>
            <div className='flex justify-center my-4'>
                <Link className='btn' to={'/'}>Home</Link>
            </div>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>

                        </tr>
                    </thead>
                    {users.map((user, index) => <tbody key={user._id}>
                        {/* row 1 */}
                        <tr>
                            <th>{index + 1}</th>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>

                        </tr>

                    </tbody>


                    )
                    }
                </table>
            </div>
            <div className='flex justify-center my-4'>
                <Link className='btn' to={'/'}>Home</Link>
            </div>


        </div>
    );
};

export default Page3;