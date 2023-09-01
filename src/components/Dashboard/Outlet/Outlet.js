
import React, { useContext, useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { AiFillFileText } from 'react-icons/ai';
import { UserStore } from '../../../StateManagment/UserContexStore';
import './Outlet.css'

const Outlet = () => {
    var CurrentTime = new Date()
    var hour = CurrentTime.getHours()
    var minute = CurrentTime.getMinutes()
    var second = CurrentTime.getSeconds()

    const [allUser, setAllUser] = useState([]);
    const userStore = useContext(UserStore);
    const data = userStore?.data;
    // console.log(data)
    const [selected, setSelected] = useState(new Date());

    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => {
                setAllUser(data)
            })
    }, [])


    return (
        <div>
            {/* page content */}
            <section className="dark:bg-gray-800 text-gray-100">
                <div className=" flex flex-col mx-auto lg:flex-row">
                    <div className=''>
                        <div className="mockup-phone">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1">

                                    <div class="flex justify-center item-center mt-4">
                                        <div class="max-w-sm rounded overflow-hidden shadow-lg p-4" >
                                            <div class="flex items-start">

                                                <span class="text-base text-red-400 font-medium flex item-center mt-2">Mess:bachelor</span>
                                            </div>
                                            <div class="flex items-start">

                                                <span class="px-2 mt-2 dark:text-white">  Month:January(Running)</span>
                                            </div>
                                            <div class=" myCss text-base text-black-500 font-thin">
                                                <div class="flex items-start">

                                                    <span class="px-2 mt-2 dark:text-white">Mess Balance: 0 tk</span>
                                                </div>
                                                <div class="flex items-start">

                                                    <span class="px-2 mt-2 dark:text-white">Total Deposit: 0 tk</span>
                                                </div>
                                                <div class="flex items-start">

                                                    <span class="px-2 mt-2 dark:text-white">Month:January(Running)</span>
                                                </div>
                                                <div class="flex items-start">

                                                    <span class="px-2 mt-2 dark:text-white">Total Meal cost: 0</span>
                                                </div>
                                                <div class="flex items-start">

                                                    <span class="px-2 mt-2 dark:text-white">  Mess Meal Rate: 0 tk</span>
                                                </div>
                                                <div class="flex items-start">

                                                    <span class="px-2 mt-2 dark:text-white"> Total Individual Cost: 0 tk</span>
                                                </div>
                                                <div class="flex items-start">

                                                    <span class="px-2 mt-2 dark:text-white">Total Shared Cost: 0 tk</span>
                                                </div>
                                                <div class="flex items-start">

                                                    <span class="px-2 mt-2 dark:text-white">

                                                        Shared Cost Per Person: 0.00 tk</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* my personal info */}
                    <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400 text-gray-600 ">
                        <div className="container p-4 mx-auto text-center">
                            <h2 className="text-4xl font-bold">My Personal info</h2>
                        </div>
                        <div className=' flex flex-wrap justify-center mx-auto text-gray-400'>

                            <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-100 shadow-xl ">
                                        <div className="card-body">
                                            <h2 className="card-title ">70</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Total Meal</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-300 shadow-xl  ">
                                        <div className="card-body">
                                            <h2 className="card-title">{data?.amount} tk</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Deposit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-100 shadow-xl ">
                                        <div className="card-body">
                                            <h2 className="card-title">See here at the last date of the month...</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Cost</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-300 shadow-xl ">
                                        <div className="card-body">
                                            <h2 className="card-title">1600 tk</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Balance</p>
                                        </div>
                                    </div>
                                </div>





                            </div>
                            <div className='flex'>

                                <h2 className='my-5 text-2xl uppercase'>My bazar date :- </h2>
                                <DayPicker
                                    mode="single"
                                    selected={selected}
                                    onSelect={setSelected}

                                />

                            </div>

                        </div>
                    </div>
                </div>
                <section className="p-6 bg-gray-900 text-gray-100">
                    <div className="container p-4 mx-auto text-center">
                        <h2 className="text-4xl font-bold">Total Member info</h2>
                    </div>
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">

                        <div className="overflow-x-auto">
                            <table className="w-full p-6 text-xs text-left whitespace-nowrap">

                                <thead>
                                    <tr className="dark:bg-gray-700">
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Email</th>
                                        <th className="p-3">Border No</th>
                                        <th className="p-3">Room No</th>
                                    </tr>
                                </thead>

                                {
                                    allUser?.map(user => <> <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
                                        <tr>
                                            <td className="px-3 py-2">
                                                <p>{user?.firstName + ' ' + user?.lastName}</p>
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


                                        </tr>

                                    </tbody></>)
                                }



                            </table>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Outlet;