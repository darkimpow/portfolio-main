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
                <p className='text-gray-400 max-w-[700px]'>I am pleased to share that I have successfully completed a 20-week full stack software engineering academy that specialized in cutting-edge technologies such as JavaScript, HTML, Tailwind CSS, and React. During my training, I gained extensive experience in working with APIs, including the recently released ChatGBT's API. Through this program, I have developed a strong foundation in software engineering principles and practices, enabling me to confidently tackle complex development projects and deliver innovative solutions.
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