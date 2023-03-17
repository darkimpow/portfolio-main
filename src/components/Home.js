import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";

function Home() {
    return (
        <div name='home' className='w-full h-screen bg-slate-700'>
            {/*Container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-emerald-400'>Hi, my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Darkim Powell</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Full Stack Developer </h2>
                <p className='text-gray-400 max-w-[700px]'>Highly motivated and results-driven professional with a background in exercise science and a passion for technology. Leveraged curiosity and determination to successfully transition into a full stack software engineering role, utilizing expertise in problem-solving and critical thinking to deliver innovative solutions. Proven ability to learn quickly and adapt to new technologies and programming languages. Committed to staying up to date with industry trends and best practices to deliver high-quality results.
                </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-emerald-400 hover:border-gray-400'>View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>

            </div>
            </div>
        </div>
    );
}

export default Home;