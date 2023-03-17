import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs";
import D from '../assets/D.svg'
function Navbar() {
    const[nav, setNav]=useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-700 text-gray-300'>
            <div>
                <img src={D} alt="logo" style={{width:'130px'}}/>
            </div>
            {/*Menu section*/}
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            {/*Hamburger side */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/> }
            </div>
            {/*Mobile view will be here*/}
            <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-slate-700 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li  className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/*Social icons for menu*/}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 '>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                            href="/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 '>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                           href="/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 '>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                           href="/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 '>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                           href="/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;