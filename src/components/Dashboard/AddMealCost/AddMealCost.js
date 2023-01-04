import React from 'react';

const AddMealCost = () => {
    return (
        <div>
            <div class="flex flex-col justify-center">
                <p class="flex justify-center text-red-500 text-3xl font-semibold my-6">
                    You Don't Have Enough Coin to Perform this action, Take Membership or earn coin.
                </p>
                <div class="flex flex-col justify-center gap-4">
                    <div class="flex flex-row justify-center gap-5">

                        <div>
                            <button class="p-2 rounded-sm bg-red-500 text-white hover:bg-red-600">Earn Free Coin</button>
                        </div>
                        <div>
                            <button class="p-2 rounded-sm bg-red-500 text-white hover:bg-red-600">Get Membership</button>
                        </div>

                    </div>
                    <div class="flex justify-center ">
                        <div class="p-2 border border-black rounded-md hover:bg-gray-300 hover:text-red-500 cursor-pointer">Go Back To Your Home</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMealCost;