import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { UserStore } from '../../../StateManagment/UserContexStore';
import { ToastContainer, toast } from 'react-toastify';


const AddMeal = () => {
    const [selected, setSelected] = useState(new Date());
    const userStore = useContext(UserStore);
    const data = userStore?.data;
    const email = userStore?.email;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handelMeal = data => {
        data = { data, email }

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

        toast.success("successfully adding")
    }


    return (
        <div>
            <div class="flex flex-col justify-center">
                <p class="flex justify-center text-red-500 text-3xl font-semibold my-6">
                    Add All Member's Meal
                </p>
                <div className="flex space-x-4 p-3 mx-auto w-[40%] bg-gray-700">
                    < div className=''>
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6 h-6 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold justify-center">{data?.firstName + ' ' + data?.lastName}</h4>
                    </div>
                </div>

                <div class="flex flex-col justify-center gap-4">

                    <div class="flex flex-row justify-center gap-5   mx-auto w-[40%]">

                        <form className=' mx-auto w-[100%]' onSubmit={handleSubmit(handelMeal)}>
                            <div className="space-y-1 text-sm">
                                <label for="date" className="block text-gray-300 my-2 font-3xl ">Selected Date or Meal For</label>
                                <DayPicker
                                    mode="single"
                                    selected={selected}
                                    onSelect={setSelected}
                                    disabled

                                />

                                <input value={format(selected, 'PP')} placeholder={format(selected, 'PP')} className="w-full px-4 py-3 rounded-md  bg-gray-900 text-gray-100 border-violet-400"  {...register("date")} />
                                {errors.date && <p className='text-red-500'>Please enter a date </p>}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label for="meal" className="block dark:text-gray-400">Meal number</label>
                                <input name="meal" id="meal" placeholder="1" className="w-full px-4 py-3 rounded-md  bg-gray-900 text-gray-100 border-violet-400" {...register('meal', {
                                    required: true,
                                    valueAsNumber: true,
                                    validate: (value) => value >= 0 && value <= 5,
                                })} />
                                {errors.meal && <p className='text-red-500'>Please enter meal number it is required</p>}
                                {errors.meal && <p className='text-red-500'>Please enter valid number (0-5) </p>}

                            </div>


                            <button className="p-2 w-full mt-5 border border-black rounded-md hover:bg-violet-900 hover:text-white cursor-pointer"><input type="submit" value="Submit" /></button>
                        </form>
                    </div>
                    <div class="flex justify-center ">
                        <div class="p-2 border border-black rounded-md hover:bg-gray-300 hover:text-red-500 cursor-pointer">Go Back To Your Home</div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default AddMeal;