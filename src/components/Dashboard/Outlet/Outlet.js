
import React from 'react';
import { AiFillFileText } from 'react-icons/ai';

const Outlet = () => {
    var CurrentTime = new Date()
    var hour = CurrentTime.getHours()
    var minute = CurrentTime.getMinutes()
    var second = CurrentTime.getSeconds()
    return (
        <div>
            {/* page content */}
            <section className="bg-gray-800 text-gray-100">
                <div className=" flex flex-col mx-auto lg:flex-row">
                    <div className=''>
                        <div className="mockup-phone">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1">


                                    <div className="flex gap-1 px-3">
                                        <div>
                                            <span className="countdown font-mono text-4xl">
                                                <span style={{ "--value": 15 }}></span>
                                            </span>
                                            days
                                        </div>
                                        <div>
                                            <span className="countdown font-mono text-4xl">
                                                <span >{hour}</span>
                                            </span>
                                            hours
                                        </div>
                                        <div>
                                            <span className="countdown font-mono text-4xl">
                                                <span >{minute}</span>
                                            </span>
                                            min
                                        </div>
                                        <div>
                                            <span className="countdown font-mono text-4xl">
                                                <span style={{ "--value": 51 }}>{second}</span>
                                            </span>
                                            sec
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* my personal info */}
                    <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
                        <div className="container p-4 mx-auto text-center">
                            <h2 className="text-4xl font-bold">My Personal info</h2>
                        </div>
                        <div className=' flex flex-wrap justify-center mx-auto text-gray-400'>

                            <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-100 shadow-xl ">
                                        <div className="card-body">
                                            <h2 className="card-title">0.00!</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Total Meal</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-300 shadow-xl  ">
                                        <div className="card-body">
                                            <h2 className="card-title">0.00!</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Deposit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-100 shadow-xl ">
                                        <div className="card-body">
                                            <h2 className="card-title">0.00!</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Cost</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-300 shadow-xl ">
                                        <div className="card-body">
                                            <h2 className="card-title">0.00!</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Balance</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-300 shadow-xl ">
                                        <div className="card-body">
                                            <h2 className="card-title">0.00!</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Balance</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-300 shadow-xl ">
                                        <div className="card-body">
                                            <h2 className="card-title">0.00!</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Balance</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-3 align-middle md:w-1/3 xl:w-1/4">
                                    <div className="card w-96 bg-base-300 shadow-xl ">
                                        <div className="card-body">
                                            <h2 className="card-title">0.00!</h2>
                                            <AiFillFileText className="mr-2" />
                                            <p>My Balance</p>
                                        </div>
                                    </div>
                                </div>



                            </div>





                        </div>
                    </div>
                </div>
                <section className="p-6 bg-black text-gray-100">
                    <div className="container p-4 mx-auto text-center">
                        <h2 className="text-4xl font-bold">Total Member info</h2>
                    </div>
                    <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
                        <div className="flex  w-1/2 p-6 ">

                        </div>


                    </div>
                </section>
            </section>
        </div>
    );
};

export default Outlet;