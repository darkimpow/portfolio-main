import React from 'react';
import Aquarium from '../assets/projects/Aquarium.png'
import GitL from '../assets/projects/GitL.png'
import TODO from '../assets/projects/TODO.png'
import HuntAce from '../assets/projects/HuntAce.png'
import Ai from '../assets/projects/AI.png'
import Admin from '../assets/projects/Admin.png'
function Work() {
    return (
        <div name='work' className=' w-full md:h-screen text-gray-300 bg-slate-700'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-emerald-400 '>Work</p>
                    <p className='py-5'>I've recently worked on projects using JavaScript, React, and Tailwind CSS etc. These technologies enabled me to create dynamic, scalable, and efficient user interfaces with improved interactivity.</p>
                </div>

                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/*Card container*/}
                    <div style={{background: ` url(${Admin})`}} className='shadow-lg shadow-slate-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*Hover effect added here*/}
                        <div className='opacity-0 group-hover:opacity-100  '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Admin Dashboard
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://admindashboard-dusky.vercel.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="https://github.com/darkimpow/admin-dashboard-final">
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
                                Aquarium.os
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://deliverable-12-fish-tank-controller.vercel.app/main.html">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="https://github.com/darkimpow/Deliverable-12-Fish-Tank-Controller">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Github os*/}
                    <div style={{background: ` url(${GitL})`}} className='shadow-lg shadow-slate-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*Hover effect added here*/}
                        <div className='opacity-0 group-hover:opacity-100  '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                GitHub Login
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github-login-fawn.vercel.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="https://github.com/darkimpow/github-login">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*More projects here*/}

                    {/*Card container*/}
                    <div style={{background: ` url(${TODO})`}} className='shadow-lg shadow-slate-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*Hover effect added here*/}
                        <div className='opacity-0 group-hover:opacity-100  '>
                            <span className='text-2xl ml-8 font-bold text-white tracking-wider'>
                                ToDo App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://todo-app-darkimpow.vercel.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="https://github.com/darkimpow/todo-app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Aquarium os*/}
                    <div style={{background: ` url(${HuntAce})`}} className='shadow-lg shadow-slate-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*Hover effect added here*/}
                        <div className='opacity-0 group-hover:opacity-100  '>
                            <span className='text-2xl ml-3 font-bold text-white tracking-wider'>
                                Hunt The Ace
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://hunt-the-ace-js-card-game.vercel.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="https://github.com/darkimpow/Hunt-the-Ace-Js-card-game-">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Github os*/}
                    <div style={{background: ` url(${Ai})`}} className='shadow-lg shadow-slate-500 group container rounded-md flex justify-center items-center mx-auto content-div pr-6'>

                        {/*Hover effect added here*/}
                        <div className='opacity-0 group-hover:opacity-100  '>
                            <span className='text-2xl ml-8 font-bold text-white tracking-wider'>
                                Ai Writer
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://ai-writer-app-final.vercel.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="https://github.com/darkimpow/ai-writer-app-final">
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