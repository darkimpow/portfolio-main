import React from 'react';
import Aquarium from '../assets/projects/Aquarium.png'
import CreativeP from '../assets/projects/CreativeP.png'
import Login from '../assets/projects/Login.png'
function Work() {
    return (
        <div name='work' className=' w-full md:h-screen text-gray-300 bg-slate-700'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-emerald-400 '>Work</p>
                    <p className='py-5'>Here are my most recent projects</p>
                </div>

                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/*Card container*/}
                    <div style={{background: ` url(${CreativeP})`}} className='shadow-lg shadow-slate-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*Hover effect added here*/}
                        <div className='opacity-0 group-hover:opacity-100  '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Aquarium os*/}
                    <div style={{background: ` url(${Aquarium})`}} className='shadow-lg shadow-slate-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*Hover effect added here*/}
                        <div className='opacity-0 group-hover:opacity-100  '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Github os*/}
                    <div style={{background: ` url(${Login})`}} className='shadow-lg shadow-slate-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*Hover effect added here*/}
                        <div className='opacity-0 group-hover:opacity-100  '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Work;