import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Page1 = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            let res = await fetch(`http://localhost:3000/users`)
            let usersData = res.json();
            return usersData
        }
    })
    console.log(users);
    return (
        <div>
            <h1>List of all User</h1>
            
                <div className="overflow-x-auto">
                     <table className="table table-zebra">
                     {/* head */}
                     <thead>
                         <tr>
                             <th></th>
                             <th>ID</th>
                             <th>Name</th>
                             <th>View</th>
                             <th>Edit</th>
                             <th>Delete</th>
                         </tr>
                     </thead>
             {   users.map((user, index) =>  <tbody key={user._id}>
                            {/* row 1 */}
                            <tr>
                                <th>{index+1}</th>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td><button>View</button></td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                         
                        </tbody>
               
                       
                )
            }
                </table>
                </div>


        </div>
    );
};

export default Page1;