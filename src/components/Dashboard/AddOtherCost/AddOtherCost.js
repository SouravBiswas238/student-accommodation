import React from 'react';

const AddOtherCost = () => {
    return (
        <div>
            <div class="flex flex-col mt-5">
                <p class="flex justify-center text-red-500 text-3xl font-semibold ">
                    Add Other Cost
                </p>
                <div class="flex flex-row gap-5 mx-20 mt-10">
                    <div class="w-1/2 p-5  border border-slate-500 rounded-md">
                        <p>Shared Other Cost means which cost is not related to meal cost, this cost will be divided equally to all members, e.g. gas bill, net bill etc. (Shared Other Cost বলতে যে হিসাব মিলের সাথে সম্পর্কযুক্ত নয়, এই খরচ সব মেম্বারদের মাঝে সমান ভাগে ভাগ হবে, যেমন:খালার বিল, বিদ্যুৎ বিল)</p>
                        <div class="flex justify-center  rounded-md bg-red-600 text-white mt-2 p-3 hover:bg-red-700 cursor-pointer">Add Shared Other Cost</div>
                    </div>
                    <div class="w-1/2 p-5  border border-slate-500 rounded-md">
                        <p>Individual Other Cost means which cost is not related to meal cost, this cost is individual member's other cost, e.g. room rent, net bill etc. (Individual Other Cost বলতে যে হিসাব মিলের সাথে সম্পর্কযুক্ত নয়, এই অপশন এর মাধ্যমে মেম্বারদের কার কত অন্যান্য খরচ হচ্ছে তা তুলতে পারবেন, যেমন:বাসা ভাড়া, wifi বিল)</p>
                        <div class="flex justify-center  rounded-md bg-red-600 text-white mt-2 p-3 hover:bg-red-700 cursor-pointer">Add Individual Other Cost</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddOtherCost;