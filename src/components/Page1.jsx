import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Page1 = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            let res = await fetch(`https://jt-1-server.vercel.app/users`)
            let usersData = res.json();
            return usersData
        }
    })
    console.log(users);
    
    let remove = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://jt-1-server.vercel.app/remove/${id}`,{
                    method: 'DELETE'
                })
                .then(res=>{
                    res.json()
                })
                .then(data1=>{
                    console.log(data1);
                    refetch()
                })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      
    }
    return (
        <div className='container mx-auto text-center space-y-3'>
            <button className='btn btn-primary btn-outline'><Link to={'/addUser'}>Add User</Link></button>
            <h1 className='text-xl font-semibold'>List of all User</h1>
            
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
                                <td><button><Link to={`/viewUsers`}>View</Link></button></td>
                                <td><button><Link to={`/editUser/${user._id}`}>Edit</Link></button></td>
                                <td onClick={()=>remove(user._id)}><button>Delete</button></td>
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