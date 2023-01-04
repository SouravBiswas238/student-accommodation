
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { UserStore } from '../../../StateManagment/UserContexStore';

const AdminOutlet = () => {
    const [allUser, setAllUser] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => {
                setAllUser(data)
            })
    }, [])

    // const userStore = useContext(UserStore);
    // const email = userStore?.email;

    const removeMember = (email) => {
        console.log('removeMember')

        const data = { isMember: false }

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    const  addMember = (email) => {
        console.log(email)

        const data = { isMember: true }
        

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    // const { isLoading, error, data, isFetching } = useQuery({
    //     queryKey: ["repoData"],
    //     queryFn: () =>
    //       axios
    //         .get('https://api.github.com/repos/tannerlinsley/react-query')
    //         .then((res) => res.data),
    //   });

    // console.log(allUser)

    // if (isLoading) return "Loading...";

    // if (error) return "An error has occurred: " + error.message;

    return (
        <div>


            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">All member list </h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">

                        <thead>
                            <tr className="dark:bg-gray-700">
                                <th className="p-3">Name</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Room_NO</th>
                                <th className="p-3">Border</th>
                                <th className="p-3">Mess_Member</th>
                                <th className="p-3">
                                    <span className="">Edit</span>
                                </th>
                            </tr>
                        </thead>

                        {
                            allUser?.map(user => <> <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
                                <tr>
                                    <td className="px-3 py-2">
                                        <p>{user?.firstName + ' ' + user?.lastName}</p>
                                    </td>

                                    <td className="px-3 py-2">
                                        <p>+88{user?.phoneNumber}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>{user?.email}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>{user?.RoomNumber}</p>

                                    </td>
                                    <td className="px-3 py-2">
                                        <p>{user?.borderNumber}</p>

                                    </td>
                                    <td className="px-3 py-2">
                                        {
                                            user?.isMember ? <> <button onClick={() => removeMember(user?.email)} className='btn btn-sm bg-red-500 text-white'>Remove member</button>  <p className='px-3  mt-1 dark:text-gray-400'></p></> : <> <button onClick={() => addMember(user?.email)} className='btn btn-sm bg-violet-700 text-white'>Add member</button>  <p className='px-3  mt-1 dark:text-gray-400'>Pending..</p></>
                                        }
                                    </td>
                                    <td className="px-3 py-2">
                                        <button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>

                            </tbody></>)
                        }



                    </table>
                </div>
            </div>

        </div>
    );
};

export default AdminOutlet;