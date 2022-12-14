import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';

const Dashboard = () => {
    // dashboard open and closed switch
    const [dbSwitch, setDbSwitch] = useState(false);
    const dashboardSwitch = { dbSwitch, setDbSwitch };

    // use Location
    const location = useLocation();

    const bgColor =
        location?.pathname === '/admin/findJob' ? 'bg-white' : 'admin-bg';

    return (
        <section className="flex">
            {/* admin sidebar */}
            <div
                className={`admin-bg  min-h-screen duration-500 ease-in-out ${dbSwitch ? 'w-[17%] min-w-[15rem]' : 'w-[5rem]'
                    }`}
            >
                <Sidebar dashboardSwitch={dashboardSwitch} />
            </div>

            {/* admin component render */}
            <div className={`${bgColor} min-w-[83%] w-full p-5`}>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default Dashboard;