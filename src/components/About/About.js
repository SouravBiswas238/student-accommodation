import React from 'react';

const About = () => {
    return (
   <div>
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
                 
                  <select className="border-2 p-2 rounded-xl" name="cars" id="cars" form="carform">
                        <option disabled selected className=" ">Is he manager?</option>
                         <option className='text-white' value="saab">Saab</option>
                        <option className='text-white' value="opel">Opel</option>
                   </select>
    
    
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
               
           If Any mess member already open an account on our app,then add him into your mess by putting his email.In that case if he already open an mess also under his name,tell him to delete the mess first.
           </p>
            <p>
    (যদি কোন মেস মেম্বার অলরেডি আমাদের এপ থেকে তার নিজের একাউন্ট খুলে থাকে তাহলে এই অপশন এ তার ইমেইল টি বসিয়ে তাকে আপনাদের মেসে যুক্ত করুন।এক্ষেত্রে সে যদি তার একাউন্ট এর আন্ডারে কোন মেস অলরেডি তৈরি করে থাকে তাকে বলুন সেই মেস টি ডিলেট করে ফেলতে,এরপর তাকে আপনাদের মেসে যুক্ত করুন)
    
           </p>
           <div className="flex flex-col gap-2">
               <input   className="border-2 p-2 rounded-xl" type="text" placeholder="IS he Manager" name="" id="text" required></input>
           <button className="border-2 p-2 rounded-xl bg-orange-500 hover:bg-orange-300" type="button">Create and add members to your mess</button>
           </div>
           </div>
           
        </div>
    
         </div>
         <div class="flex justify-center item-center mt-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg p-4" > 
            <div class="flex items-start">
                 <img src="https://t4.ftcdn.net/jpg/03/54/81/29/240_F_354812922_gCGaFeyOWQBbg9O2Yl7wQZoP04n9rgsN.jpg" alt="">
            <span class="text-base text-red-400 font-medium flex item-center mt-2">Mess:bachelor</span>
            </div>
            <div class="flex items-start">
               <img src="https://t4.ftcdn.net/jpg/01/79/12/07/240_F_179120718_bQ8B8z5lPgf3SMizWsCY9412NBT5vMRM.jpg " alt="">
                <span class="text mt-2">  Month:January(Running)</span>
            </div>
            <div class=" myCss text-base text-black-500 font-thin">
                <div class="flex items-start">
                    <img src="https://t4.ftcdn.net/jpg/05/13/88/51/240_F_513885148_cx30XljLPYhXvGRpU74cf1sxZqxejRoV.jpg" alt="">
                    <span class="text">Mess Balance: 0 tk</span>
                </div>
                <div class="flex items-start">
                    <img src="https://t3.ftcdn.net/jpg/00/68/13/12/240_F_68131267_3ks1PehMmJPRcZuLTWdB4UNQAk8aKQmD.jpg" alt="">
                    <span class="text">Total Depojit: 0 tk</span>
                </div>
                <div class="flex items-start">
                    <img src="https://t4.ftcdn.net/jpg/02/30/36/05/240_F_230360527_AfdnUBRtIoGUP3mcAyOrWa2lQKYEP3KQ.jpg" alt="">
                    <span class="text">Month:January(Running)</span>
                </div>
                <div class="flex items-start">
                    <img src="https://t4.ftcdn.net/jpg/01/23/84/57/240_F_123845723_KzruBUrPMXVmQYzZwSS5Ahi3q4MWDIGN.jpg" alt="">
                    <span class="text">Total Meal cost: 0</span>
                </div>
                <div class="flex items-start">
                    <img src="https://t4.ftcdn.net/jpg/02/96/22/63/240_F_296226354_nXO2m8IrM7g1JYJtHS54tEIqeBukSei5.jpg" alt="">
                    <span class="text">  Mess Meal Rate: 0 tk</span>
                </div>
                <div class="flex items-start">
                    <img src="https://t4.ftcdn.net/jpg/03/30/34/01/240_F_330340181_j9TQOOsWOwjfvlnr0JoJylZlGd8Eq2cQ.jpg" alt="">
                    <span class="text"> Total Individual Cost: 0 tk</span>
                </div>
                <div class="flex items-start"> 
                    <img src="https://t4.ftcdn.net/jpg/04/10/57/45/240_F_410574547_dHI3rPjv0BsNHVuFE6niFpngQeyguuRN.jpg" alt="">
                    <span class="text">Total Shared Cost: 0 tk</span>
                </div>
                <div class="flex items-start">
                    <img src="https://t3.ftcdn.net/jpg/01/89/98/78/240_F_189987860_ARTOl3bC43EOLJCQOsJI149LJdjtMbZN.jpg" alt="">
                    <span class="text">

                        Shared Cost Per Person: 0.00 tk</span>
                </div>
               
            </div>
           
        </div>
     </div>
   </div>

   
        
    );
};

export default About;