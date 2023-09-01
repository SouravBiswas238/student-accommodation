import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserStore } from '../../StateManagment/UserContexStore';
import SpinLoading from '../Loading/SpinLoading';
import StudentRegister from '../StudentRegester/StudentRegister';


const About = () => {
    const userStore = useContext(UserStore);
    const currentUser = userStore?.data;
    const user = userStore?.email;

    if (!user) {
        return <SpinLoading height='h-[205px]' width='w-[200px]'></SpinLoading>
    }

    // console.log(currentUser)
    return (
        <div >


            <h2 className=" lg:text-3xl text-xl font-semibold leading-tight text-center my-3 text-gray-200">To join out Mess, please submit the Form </h2>

            <StudentRegister currentUser={currentUser}></StudentRegister>



        </div>



    );
};

export default About;