import React from 'react';
import { useForm } from 'react-hook-form';
const StudentRegister = ({ currentUser }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // console.log(currentUser)


    const registerSubmit = (data) => {
        console.log(data)
        const email = data.email;

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="w-full mx-auto my-5 max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100 ">
            <form onSubmit={handleSubmit(registerSubmit)} action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label for="Name" className="block text-sm"> Name</label>{

                            currentUser?.firstName ? <input id="Name" value={currentUser?.firstName + ' ' + currentUser?.lastName} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" {...register('Name')} /> : <input id="Name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" {...register('Name', { required: true })} />

                        }
                        {errors.Name && <p className='text-red-500'>Name is required.</p>}

                    </div>
                    <div className="space-y-2">
                        <label for="Email" className="block text-sm"> Email</label>
                        <input id="Email" value={currentUser?.email} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" {...register('email')} />
                    </div>
                    <div className="space-y-2">
                        <label for="Batch" className="block text-sm"> Batch No</label>
                        <input type='number' id="Batch" placeholder='Batch NO' className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" {...register('Batch')} />
                        {errors.Batch && <p className='text-red-500'>Batch is required.</p>}

                    </div>
                    <div className="space-y-2">
                        <label for="Department" className="block text-sm"> Department</label>
                        <input id="Department" placeholder='Department' className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" {...register('Department', { required: true })} />
                        {errors.Department && <p className='text-red-500'>Department is required.</p>}


                    </div>
                    <div className="space-y-2">
                        <label for="phoneNumber" className="block text-sm">Phone Number</label>
                        <input type='number' id="phoneNumber" placeholder="Phone Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" {...register('phoneNumber', { required: true })} />
                        {errors.lastName && <p className='text-red-500'>Phone Number is required.</p>}
                    </div>
                    <div className="space-y-2">
                        <label for="RoomNumber" className="block text-sm">Room Number</label>
                        <input type='number' id="RoomNumber" placeholder="Room Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" {...register('RoomNumber', { required: true })} />
                        {errors.lastName && <p className='text-red-500'>Room Number is required.</p>}
                    </div>
                    <div className="space-y-2">
                        <label for="borderNumber" className="block text-sm">Border Number</label>
                        <input type='number' id="borderNumber" placeholder="Border Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" {...register('borderNumber', { required: true })} />
                        {errors.lastName && <p className='text-red-500'>Border Number is required.</p>}
                    </div>


                </div>
                <div className='mt-[-20px]'>
                    <input type="submit" className="w-full px-8 py-3  font-semibold rounded-md dark:bg-violet-400 hover:bg-violet-600" />
                </div>
            </form>
        </div>
    );
};

export default StudentRegister;