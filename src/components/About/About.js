import React from 'react';

const About = () => {
    return (
    <div className="ml-8 mr-8 ">
         <h1 className="text-center text-orange-500 font-bold text-3xl ">
             Add Member To Your Mess
         </h1>
        
         <div className="flex flex-row justify-between ">
        <div className="max-w-60% p-10 ">
             <h5 className="text-orange-500 mb-2 font-bold text-1xl">Create & Add New Member</h5>
             <div className="flex flex-col gap-2">
             <input className="border-2 p-2 rounded-xl" type="text" name="" placeholder="New Member Name" id="text" required></input>
             
              <input className="border-2 p-2 rounded-xl" type="Email" placeholder="New member Email" name="email" id="text" required></input>

             </div>
             <p className="text-justify mt-3">
             কোন মেম্বার এর সঠিক ইমেইল জানা না থাকলে আপাতত demo(যেকোন নাম)@mm.app এই ইমেইল দিয়ে একাউন্ট খুলুন,পরে তাকে বলবেন সঠিক ইমেইল সেট করতে। (If any of your member doesn't have valid email,use a demo email using this template demo..@mm.app ,tell him to set the valid email later.)
             </p>
             <div className="flex flex-col">
                   <input className="border-2 p-2 rounded-xl" type="text" name="" placeholder="New Member Name" id="text" required></input>
             </div>
             
              
             
             <p className="text-justify my-2">
             New member's default password is: 123456 , use this password for log In to his account, then change default password (নতুন মেম্বারের ডিফল্ট পাসওয়ার্ড : 123456 , তার অ্যাকাউন্টে লগ ইন করার জন্য তার ইমেইল এবং পাসওয়ার্ড 123456 দিয়ে লগ ইন করতে বলুন, লগ ইন করার পর ডিফল্ট পাসওয়ার্ড পরিবর্তন করতে বলুন)
             </p>
             <div className="flex flex-col ">
                    <button type="button" className="border-2 p-2 rounded-xl bg-orange-500 hover:bg-orange-300 ">Create and add members to your mess</button>
             </div> 
         
            </div>
            <div className="max-w-40% p-10"> 
            <h1 className='text-orange-500 font-bold text-1xl'>Add Existing Member By Email</h1>
                <div className="flex flex-col mt-4">
                    <input  className="border-2 p-2 rounded-xl" type="Email" placeholder="New member Email" name="email" id="text" required></input>
                </div>
               
          
            <p className="text-justify my-2">
            New member's default password is: 123456 , use this password for log In to his account, then change default password (নতুন মেম্বারের ডিফল্ট পাসওয়ার্ড : 123456 , তার অ্যাকাউন্টে লগ ইন করার জন্য তার ইমেইল এবং পাসওয়ার্ড 123456 দিয়ে লগ ইন করতে বলুন, লগ ইন করার পর ডিফল্ট পাসওয়ার্ড পরিবর্তন করতে বলুন)

            </p>
            <div className="flex flex-col gap-2">
                <input   className="border-2 p-2 rounded-xl" type="text" placeholder="IS he Manager" name="" id="text" required></input>
            <button className="border-2 p-2 rounded-xl bg-orange-500 hover:bg-orange-300" type="button">Create and add members to your mess</button>
            </div>
            </div>
            
         </div>
    </div>
          
        
    );
};

export default About;