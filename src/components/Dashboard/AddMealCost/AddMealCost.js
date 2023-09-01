import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserStore } from '../../../StateManagment/UserContexStore';
import './AddMealCost.css'
import { toast } from 'react-toastify';


const AddMealCost = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const userStore = useContext(UserStore);
    const email = userStore?.email;
    const handelPay = (data) => {
        console.log(data)
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
        toast.success('Payment Successful')
    }
    return (
        <div>
            <div class="flex flex-col justify-center">
                <p class="flex justify-center text-red-500 text-3xl font-semibold my-6">
                    Add money
                </p>

                <div class="w-[50%] mx-auto bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                    <div class="w-full mx-auto rounded-lg bg-grey-600 shadow-lg p-5 text-gray-700 max-width: 600px">
                        <div class="w-full pt-1 pb-5">
                            <div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                <i class="mdi mdi-credit-card-outline text-3xl"></i>
                            </div>
                        </div>
                        <div class="mb-10">
                            <h1 class="text-center font-bold text-xl uppercase">Secure payment info</h1>
                        </div>
                        <div class="mb-3 flex -mx-2">
                            <div class="px-2">
                                <label for="type1" class="flex items-center cursor-pointer">
                                    <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked></input>
                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3"></img>
                                </label>
                            </div>
                            <div class="px-2">
                                <label for="type2" class="flex items-center cursor-pointer">
                                    <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"></input>
                                    <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3"></img>
                                </label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
                            <div>
                                <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="font-bold text-sm mb-2 ml-1">Card number</label>
                            <div>
                                <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                            </div>
                        </div>
                        <div class="mb-3 -mx-2 flex items-end">
                            <div class="px-2 w-1/2">
                                <label class="font-bold text-sm mb-2 ml-1">Expiration date</label>
                                <div>
                                    <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                        <option value="01">01 - January</option>
                                        <option value="02">02 - February</option>
                                        <option value="03">03 - March</option>
                                        <option value="04">04 - April</option>
                                        <option value="05">05 - May</option>
                                        <option value="06">06 - June</option>
                                        <option value="07">07 - July</option>
                                        <option value="08">08 - August</option>
                                        <option value="09">09 - September</option>
                                        <option value="10">10 - October</option>
                                        <option value="11">11 - November</option>
                                        <option value="12">12 - December</option>
                                    </select>
                                </div>
                            </div>
                            <div class="px-2 w-1/2">
                                <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-10">
                            <label class="font-bold text-sm mb-2 ml-1">Security code</label>
                            <div>
                                <input class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(handelPay)} action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">

                                <div className="space-y-2">
                                    <label for="amount" className="block text-sm">Amount</label>
                                    <input type='amount' id="amount" placeholder="amount" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100 focus: border-violet-400" {...register('amount', { required: true })} />
                                    {errors.amount && <p className='text-red-500'>Cost  is required.</p>}
                                </div>



                            </div>


                            <div>
                                <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                            </div>
                        </form>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default AddMealCost;