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


    const [user, setUser] = useState([]);
    const [allUser, setAllUser] = useState([]);
    const [allAdmin, setAllAdmin] = useState([]);
    const [activeUser, setActiveUser] = useState("");







    //this state stored user data  //==> Don't move this one !
    const userData = {
        user,
        allUser,
        allAdmin,
        activeUser,

    };
    //user context provider component //==> Don't move this one !
    return <UserStore.Provider value={userData}>{children}</UserStore.Provider>;
};

export { UserStore, UserStoreProvider };
