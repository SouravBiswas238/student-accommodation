import React, { useEffect, useState } from 'react';
import logo from '../../assets/university.png'
import { NavLink } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navigation = () => {
    // const [globalUser, setGlobalUser] = useState({});


    const [user] = useAuthState(auth);
    // console.log(user?.displayName)
    // const email = user?.email;

    // fetch(`http://localhost:5000/user/${email}`)
    //     .then((res) => res.json())
    //     .then((data) => setGlobalUser(data));

    // console.log(globalUser)

    const handleSignOut = () => {
        signOut(auth);

    }

    const activeStyle = 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400'
    const normalLink = 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'


    return (

        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img className="object-cover w-16 h-16 rounded-full shadow dark:bg-gray-500" src={logo} alt="logo" />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">

                    <li className="flex">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? activeStyle : normalLink
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? activeStyle : normalLink
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? activeStyle : normalLink
                            }
                        >
                            Dashbord
                        </NavLink>
                    </li>


                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">

                    {
                        user ?
                            <button onClick={handleSignOut} className='text-white px-5'> Log out </button>
                            :
                            <NavLink className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900" eventKey="link-1" to="/login">Log In</NavLink>
                    }

                    <NavLink className='text-white'>{user?.displayName} </NavLink>
                    {/* <NavLink className='text-white'>{globalUser} </NavLink> */}


                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header >

    );
};

export default Navigation;