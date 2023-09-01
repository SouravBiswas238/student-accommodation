import React, { useEffect, useState } from 'react';

const TodaysMeal = () => {
    const [allUser, setAllUser] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => {
                setAllUser(data)
            })
    }, [])
    console.log(allUser)

    return (
        <div>
            <h2 className='text-center my-5 text-3xl text-white'>Todays Active Meal</h2>
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">

                <thead>
                    <tr className=" bg-gray-700">
                        <th className="p-3">Name</th>
                        <th className="p-3">Border</th>
                        <th className="p-3">Room No</th>
                        <th className="p-3">Meal Count</th>
                        <th className="p-3">
                            <span className="">Edit</span>
                        </th>
                    </tr>
                </thead>

                {
                    allUser?.map(user => <> <tbody className="border-b  bg-gray-900  border-gray-700">
                        <tr>
                            <td className="px-3 py-2">
                                <p>{user?.firstName + ' ' + user?.lastName}</p>
                            </td>



                            <td className="px-3 py-2">
                                <p>{user?.RoomNumber}</p>

                            </td>
                            <td className="px-3 py-2">
                                <p>{user?.borderNumber}</p>

                            </td>
                            <td className="px-3 py-2">
                                <p>{
                                    user?.data?.meal ? user?.data?.meal : '0'}</p>

                            </td>

                            <td className="px-3 py-2">
                                <button type="button" title="Open details" className="p-1 rounded-full  text-gray-600 hover: bg-gray-700 focus: bg-gray-700">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>

                    </tbody></>)
                }



            </table>
            <h2 className='my-5'>Todays total meal = 32</h2>
        </div>
    );
};

export default TodaysMeal;