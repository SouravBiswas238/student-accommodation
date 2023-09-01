import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const UserStore = createContext();

const UserStoreProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    const [allUser, setAllUser] = useState([]);
    const [allAdmin, setAllAdmin] = useState([]);
    const [activeUser, setActiveUser] = useState("");


    //get user data with auth
    const [globalUser] = useAuthState(auth);
    const email = globalUser?.email;


    const { data, isLoading, error, refetch } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'GET',
        })
            .then(res =>
                res.json()
            )
    )

    // Get single user data form api
    // const fetchUser = async () => {
    //     await axios.get(`http://localhost:5000/user/${userEmail}`, {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //         },
    //     })
    //         .then((res) => {
    //             setUser(res.data)
    //             setActiveUser(userEmail)
    //         })
    //         .catch(function (err) {
    //             navigate('/login');
    //         });
    // };
    // useEffect(() => {
    //     if (userEmail) {
    //         fetchUser();
    //     } else {
    //         console.log('Email not found from useContex');
    //     }
    // }, []);

    // fet all user from database
    const fetchAllUser = async () => {
        await axios.get(`http://localhost:5000/user`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }
        )
            .then(function (res) {
                setAllUser(res?.data);
            })
            .catch(function (err) {
                navigate('/login')
            })
    }
    useEffect(() => {
        fetchAllUser();
    }, [])

    // fetch all admin DATA
    // const fetchAdmin = async () => {
    //     await axios.get(`${serverLink}/user/admin`, {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //         },
    //     }
    //     )
    //         .then(function (res) {
    //             setAllAdmin(res?.data);
    //         })
    //         .catch(function (err) {
    //             checkTokenExpired(err) === true && navigate('/login')
    //         })
    // }
    // useEffect(() => {
    //     fetchAdmin();
    // }, [])









    //this state stored user data  //==> Don't move this one !
    const userData = {
        email,
        data,
        user,
        allUser,
        allAdmin,
        activeUser,
        isLoading,
        refetch,

    };
    //user context provider component //==> Don't move this one !
    return <UserStore.Provider value={userData}>{children}</UserStore.Provider>;
};

export { UserStore, UserStoreProvider };
