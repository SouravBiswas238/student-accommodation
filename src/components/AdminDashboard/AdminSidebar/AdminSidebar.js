import React, { useState } from 'react';
import { AiFillFileText, AiOutlineHome, AiOutlineUpload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import { RiFindReplaceLine } from 'react-icons/ri';
import { FcManager } from 'react-icons/fc';

const AdminSidebar = ({ dashboardSwitch }) => {
    // dashboard open and closed switch
    const { dbSwitch, setDbSwitch } = dashboardSwitch;
    const [arrowSwitch, setArrowSwitch] = useState(false)

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
                    <Link to="/admin">
                        <li className={dashboardLinkStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 mr-2 h-5 fill-current text-gray-400">
                                <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                            </svg>
                            <span className={`${!dbSwitch && 'hidden py-2'}`}>All member list</span>
                        </li>
                    </Link>
                    <Link to="today-on-meal">
                        <li className={dashboardLinkStyle}>
                            <AiFillFileText className="mr-2" />
                            <span className={`${!dbSwitch && 'hidden'}  text-[16px] `} >Todays On meal</span>
                        </li>
                    </Link>

                    <Link to="">
                        <li className={dashboardLinkStyle}>
                            <AiFillFileText className="mr-2" />
                            <span className={`${!dbSwitch && 'hidden'} text-[16px]`} > Remove  User</span>
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










                    <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-lg  bg-gray-500" />
                        <div className={`${!dbSwitch && 'hidden'}`}>
                            <h2 className="text-lg font-semibold  "> Leroy Jenkins</h2>
                            <div className='flex justify-between'>

                                <span className="flex items-center">
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline  text-gray-400">View profile</a>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="flex items-center space-x-1 w-5 h-5 fill-current  text-gray-400">
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

export default AdminSidebar;