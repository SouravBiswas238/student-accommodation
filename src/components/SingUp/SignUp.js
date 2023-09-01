import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link } from 'react-router-dom';
import makeId from './SuggestPass';




const SignUp = () => {
    const [passwordBar, setPasswordBar] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        console.log(data)

    }



    return (
        <div className="w-full mx-auto my-5 max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100 ">

            <h2 className="mb-3 text-3xl font-semibold text-center">Create a new account</h2>

            {/* email password login part */}
            <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label for="Name" className="block text-sm">Enter your Name</label>
                        <input id="Name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" {...register('Name', { required: true })} />
                        {errors.firstName && <p className='text-red-500'>First name is required.</p>}
                    </div>

                    <div className="space-y-2">
                        <label for="email" className="block text-sm">Email Address</label>
                        <input id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"  {...register('email', { required: true })} />
                        {errors.email && <p className='text-red-500'>Please enter valid email address</p>}
                    </div>

                    <div className="form-control">
                        {/* Password */}
                        <div className="space-y-2">
                            <label for="password" className="block text-sm">Password</label>
                            <input
                                value={passwordBar}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Input Password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                {...register('password', {
                                    required: true,
                                    // pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                })}
                                onChange={(e) => setPasswordBar(e.target.value)}
                            />
                        </div>


                        <div className="text-md flex  justify-between mt-4  md:items-center xs:flex-col-reverse">
                            <div>
                                <button
                                    className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]"
                                    onClick={() => setPasswordBar(makeId(10))}
                                >
                                    Suggest a Strong Password
                                </button>
                            </div>
                            <div className="text-xl flex justify-end">
                                <div className="form-control ">
                                    <label className="label cursor-pointer  ">
                                        <div className="flex justify-around gap-2 items-center ">
                                            <p className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                                                Show Password
                                            </p>
                                            <input
                                                onChange={() =>
                                                    setShowPassword(!showPassword)
                                                }
                                                type="checkbox"
                                                checked={showPassword}
                                                className="checkbox"
                                            />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <PasswordStrengthBar password={passwordBar} />


                        <button className='btn btn-outline btn-primary
            my-5' onClick={handleSubmit}>Sign up</button>
                    </div>
                </div>
            </form>

            <p className="text-xs text-center sm:px-6 text-gray-400 pt-5">Don't have an account?
                <Link to="/login" className=" underline text-gray-100">Login
                </Link>
            </p>



        </div>
    );
};

export default SignUp;