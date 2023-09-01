import React, { useContext, useState } from 'react';
import { AiFillFileText, AiOutlineHome, AiOutlineUpload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import { RiFindReplaceLine } from 'react-icons/ri';
import { FcManager } from 'react-icons/fc';
import { UserStore } from '../../../StateManagment/UserContexStore';

const Sidebar = ({ dashboardSwitch }) => {
    // dashboard open and closed switch
    const { dbSwitch, setDbSwitch } = dashboardSwitch;
    const [arrowSwitch, setArrowSwitch] = useState(false)

    const userStore = useContext(UserStore);
    const data = userStore?.data;

    // dashboard link style
    const dashboardLinkStyle = `my-2 text-gray-400 hover:text-gray-50 hover:bg-[#3a3f51] flex items-center rounded-lg ${dbSwitch ? 'p-3 text-base ' : 'p-1 text-2xl justify-center'
        } font-semibold cursor-pointer`;

    return (
        <div className='sticky top-0 '>
            <div className="px-2 relative ">
                {/* dashboard open and closed button  */}
                <button
                    onClick={() => setDbSwitch(!dbSwitch)}
                    className="text-2xl text-gray-600 border-2 bg-white border-white rounded-full absolute top-2 right-[-1rem] duration-300 ease-out outline-none"
                >
                    {dbSwitch ? <FaAngleLeft /> : <FaAngleRight />}
                </button>

                {/* dashboard Link */}
                <ul className="pt-9">
                    <Link to="/dashboard">
                        <li className={dashboardLinkStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 mr-2 h-5 fill-current text-gray-400">
                                <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                            </svg>
                            <span className={`${!dbSwitch && 'hidden py-2'}`}>Home</span>
                        </li>
                    </Link>

                    

                    <Link to="addMeal">
                        <li className={dashboardLinkStyle}>
                            <RiFindReplaceLine className="mr-2" />
                            <span className={`${!dbSwitch && 'hidden'}`}> Add meal</span>
                        </li>
                    </Link>
                    <Link to="mealCost">
                        <li className={dashboardLinkStyle}>
                            <AiOutlineUpload className="mr-2" />
                            <span className={`${!dbSwitch && 'hidden'}`}>Add Meal Payment</span>
                        </li>
                    </Link>
                    <Link to="addCost">
                        <li className={dashboardLinkStyle}>
                            <FcManager className="mr-2" />
                            <span className={`${!dbSwitch && 'hidden'}`}> Add Other Cost</span>
                        </li>
                    </Link>
                    <Link to="activeMonth">
                        <li className={dashboardLinkStyle}>
                            <AiFillFileText className="mr-2" />
                            <span className={`${!dbSwitch && 'hidden'}`}>Active Month Details</span>
                        </li>
                    </Link>

                    <li onClick={() => setArrowSwitch(!arrowSwitch)} className={dashboardLinkStyle}>



                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                            <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                            <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                        </svg>
                        <span className={`${!dbSwitch && 'hidden'} mx-2`}>Options</span>
                        <span className={`${!dbSwitch && 'hidden'}`}>
                            {
                                arrowSwitch ? <FaAngleDown className="" /> : <FaAngleUp className="" />
                            }
                        </span>

                    </li>

                    <ul className={`${!arrowSwitch && ' hidden '},  w-[90%] `}>
                        <Link to="">
                            <li className={dashboardLinkStyle}>
                                <AiFillFileText className="mr-2" />
                                <span className={`${!dbSwitch && 'hidden'}  text-[16px] `} >All Member</span>
                            </li>
                        </Link>
                        <Link to="">
                            <li className={dashboardLinkStyle}>
                                <AiFillFileText className="mr-2" />
                                <span className={`${!dbSwitch && 'hidden'} text-[16px]`} > Remove Member</span>
                            </li>
                        </Link>
                        <Link to="">
                            <li className={dashboardLinkStyle}>
                                <AiFillFileText className="mr-2" />
                                <span className={`${!dbSwitch && 'hidden'} text-[16px]`} > Change Manager</span>
                            </li>
                        </Link>
                        <Link to="">
                            <li className={dashboardLinkStyle}>
                                <AiFillFileText className="mr-2" />
                                <span className={`${!dbSwitch && 'hidden'} text-[16px]`} >Delete Old month</span>
                            </li>
                        </Link>
                        <Link to="">
                            <li className={dashboardLinkStyle}>
                                <AiFillFileText className="mr-2" />
                                <span className={`${!dbSwitch && 'hidden'} text-[16px]`} >Delete </span>
                            </li>
                        </Link>


                    </ul>


                    <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
                        <div className={`${!dbSwitch && 'hidden'}`}>
                            <h2 className="text-lg font-semibold  ">{data?.firstName}</h2>
                            <div className='flex justify-between'>

                                <span className="flex items-center">
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="flex items-center space-x-1 w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                        <rect width="32" height="64" x="256" y="232"></rect>
                                    </svg>
                                </span>
                            </div>

                        </div>

                    </div>


                </ul>

            </div >

        </div >
    );
};

export default Sidebar;