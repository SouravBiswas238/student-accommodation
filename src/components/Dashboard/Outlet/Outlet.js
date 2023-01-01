
import React from 'react';
import { AiFillFileText } from 'react-icons/ai';
import './Outlet.css'

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

                                    {/* <div class="flex justify-center item-center mt-4 text-">
                <div class="max-w-sm rounded overflow-hidden shadow-lg p-4" >
                    <div class="flex items-start">
                        <img src="https://t4.ftcdn.net/jpg/03/54/81/29/240_F_354812922_gCGaFeyOWQBbg9O2Yl7wQZoP04n9rgsN.jpg" alt=""></img>
                            <span class="text-base text-red-400 font-medium flex item-center mt-2">Mess:bachelor</span>
                    </div>
                    <div class="flex items-start">
                        <img src="https://t4.ftcdn.net/jpg/01/79/12/07/240_F_179120718_bQ8B8z5lPgf3SMizWsCY9412NBT5vMRM.jpg " alt=""></img>
                            <span class="text mt-2">  Month:January(Running)</span>
                    </div>
                    <div class=" myCss text-base text-black-500 font-thin">
                        <div class="flex items-start">
                            <img className='text-white' src="https://t4.ftcdn.net/jpg/05/13/88/51/240_F_513885148_cx30XljLPYhXvGRpU74cf1sxZqxejRoV.jpg" alt=""></img>
                                <span class="text">Mess Balance: 0 tk</span>
                        </div>
                        <div class="flex items-start">
                            <img src="https://t3.ftcdn.net/jpg/00/68/13/12/240_F_68131267_3ks1PehMmJPRcZuLTWdB4UNQAk8aKQmD.jpg" alt=""></img>
                                <span class="text">Total Depojit: 0 tk</span>
                        </div>
                        <div class="flex items-start">
                            <img src="https://t4.ftcdn.net/jpg/02/30/36/05/240_F_230360527_AfdnUBRtIoGUP3mcAyOrWa2lQKYEP3KQ.jpg" alt=""></img>
                                <span class="text">Month:January(Running)</span>
                        </div>
                        <div class="flex items-start">
                            <img src="https://t4.ftcdn.net/jpg/01/23/84/57/240_F_123845723_KzruBUrPMXVmQYzZwSS5Ahi3q4MWDIGN.jpg" alt=""></img>
                                <span class="text">Total Meal cost: 0</span>
                        </div>
                        <div class="flex items-start">
                            <img src="https://t4.ftcdn.net/jpg/02/96/22/63/240_F_296226354_nXO2m8IrM7g1JYJtHS54tEIqeBukSei5.jpg" alt=""></img>
                                <span class="text">  Mess Meal Rate: 0 tk</span>
                        </div>
                        <div class="flex items-start">
                            <img src="https://t4.ftcdn.net/jpg/03/30/34/01/240_F_330340181_j9TQOOsWOwjfvlnr0JoJylZlGd8Eq2cQ.jpg" alt=""></img>
                                <span class="text"> Total Individual Cost: 0 tk</span>
                        </div>
                        <div class="flex items-start">
                            <img src="https://t4.ftcdn.net/jpg/04/10/57/45/240_F_410574547_dHI3rPjv0BsNHVuFE6niFpngQeyguuRN.jpg" alt=""></img>
                                <span class="text">Total Shared Cost: 0 tk</span>
                        </div>
                        <div class="flex items-start">
                            <img src="https://t3.ftcdn.net/jpg/01/89/98/78/240_F_189987860_ARTOl3bC43EOLJCQOsJI149LJdjtMbZN.jpg" alt=""></img>
                                <span class="text">

                                    Shared Cost Per Person: 0.00 tk</span>
                        </div>

                    </div>

                </div>
            </div> */}

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