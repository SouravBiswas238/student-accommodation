import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="w-full my-banner relative">
                <div className="p-6 py-12 bg-violet-400 text-gray-900 absolute bottom-0 w-full">
                    <h1 className='text-center text-black text-5xl text-bold uppercase'>Student accommodation</h1>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 px-[200px]'>
                <div className="px-7">
                    <h2 className='text-4xl  font-bold  pt-5 pb-3'>Your student home</h2>
                    <p className='py-2 pb-5'>
                        Feeling at home is just as important as your degree. So, from offering modern, well-equipped student accommodation designed to fit a range of tastes and budgets, to giving you the support you need to find private sector housing, and offering you the chance to <a href="#" className='text-primary underline'>speak to current students,</a> we’ll help make your transition to student living as seamless as possible.   </p>
                    <p className='py-2'>
                        Our student accommodation is organised by FXPlus - part of Falmouth University and our partners, the University of Exeter. It's spread across the Penryn campus and sites in Falmouth and Penryn towns; all connected by regular bus and train services. You can find out what's available and the number of spaces on the <a href="#">accommodation website.</a>
                    </p>
                </div>
                <div className='relative py-[30px] mt-10 px-10'>
                    <div className='my-video'>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/304584807?h=a34a920dcd" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;