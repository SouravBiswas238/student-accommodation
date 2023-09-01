import React from 'react';

const AddMember = () => {



    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const batch = form.batch.value;
        const department = form.department.value;
        const registration = form.registration.value;
        const phoneNumber = form.phoneNumber.value;
        const borderNumber = form.borderNumber.value;
        console.log(name, email, batch, department, registration, phoneNumber, borderNumber);

    }



    return (
        <div>
            <div className="ml-8 mr-8 ">
                <h1 className="text-center text-orange-500 font-bold text-3xl ">
                    Add Member To Your Mess
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="lg:flex flex-row justify-around ">

                        <div className='lg:p-10 px-10 w-full'>

                            <div className="pt-4 space-y-1">
                                <label for="Name" className="block text-sm"> Name</label>
                                <input type='text' name="name" id="Name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="pt-4 space-y-1">
                                <label for="Email" className="block text-sm"> Email</label>
                                <input type='email' name="email" id="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" placeholder='Email address' />
                            </div>
                            <div className="pt-4 space-y-1">
                                <label for="Batch" className="block text-sm"> Batch No</label>
                                <input name="batch" type='number' id="Batch" placeholder='Batch NO' className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="pt-4 space-y-1">
                                <label for="Department" className="block text-sm"> Department</label>
                                <input type='text' name="department" id="Department" placeholder='Department' className="w-full space-y-2 px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>

                        </div>



                        <div className='lg:p-10 px-10 w-full'>

                            <div className="pt-4 space-y-1">
                                <label for="Registration" className="block text-sm"> Registration Number</label>
                                <input name="registration" type='number' id="Registration" placeholder='Registration NO' className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>

                            <div className="pt-4 space-y-1">
                                <label for="phoneNumber" className="block text-sm">Phone Number</label>
                                <input name="phoneNumber" type='number' id="phoneNumber" placeholder="Phone Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="pt-4 space-y-1">
                                <label for="RoomNumber" className="block text-sm">Room Number</label>
                                <input name="roomNumber" type='number' id="RoomNumber" placeholder="Room Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>

                            <div className="pt-4 space-y-1">
                                <label for="borderNumber" className="block text-sm">Border Number</label>
                                <input name="borderNumber" type='number' id="borderNumber" placeholder="Border Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>

                        </div>

                    </div>
                    <div className='mt-[-20px] flex justify-center'>
                        <input type="submit" className=" w-2/3 px-8 py-3 text-white text-xl font-semibold rounded-md dark:bg-orange-400 hover:bg-orange-600" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddMember;