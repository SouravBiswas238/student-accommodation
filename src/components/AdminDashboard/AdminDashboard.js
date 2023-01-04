import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import AdminSidebar from './AdminSidebar/AdminSidebar';

const AdminDashboard = () => {
    // dashboard open and closed switch
    const [dbSwitch, setDbSwitch] = useState(false);
    const dashboardSwitch = { dbSwitch, setDbSwitch };




 
    return (
        <section className="flex">
            {/* admin AdminSidebar */}
            <div
                className={`bg-gray-700  min-h-screen duration-500 ease-in-out ${dbSwitch ? 'w-[17%] min-w-[15rem]' : 'w-[5rem]'
                    }`}
            >
                <AdminSidebar dashboardSwitch={dashboardSwitch} />
            </div>

            {/* admin component render */}
            <div className={` min-w-[83%] w-full p-5`}>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default AdminDashboard;