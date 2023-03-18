import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs";
import D from '../assets/D.svg'
import  {Link} from 'react-scroll'
function Navbar() {
    const[nav, setNav]=useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-700 text-gray-300'>
            <div>
                <img className='pt-10' src={D} alt="logo" style={{width:'230px'}}/>
            </div>
            {/*Menu section with smooth scroll through link react-scroll import */}
                <ul className='hidden md:flex'>
                    <li>
                        <Link  to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link  to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link  to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link  to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link  to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a href='https://docs.google.com/document/d/1XCEsQsMHQh1be1dRqIax0G4q_qm01ja_180xMjZzFS8/edit?usp=sharing'>Resume</a>
                    </li>
                </ul>
            {/*Hamburger side */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/> }
            </div>
            {/*Mobile view will be here with handleClick function for menu disapearing feature */}
            <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-slate-700 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}   to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li  className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/*Social icons for menu*/}
            <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[70] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 '>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                            href="https://www.linkedin.com/in/darkim-powell-2a31b81bb/">
                            LinkedIn <FaLinkedin size={40}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[70] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700 '>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                           href="https://github.com/darkimpow?tab=repositories">
                            Github <FaGithub size={40}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[70] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500 '>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                           href="/">
                            Email <HiOutlineMail size={40}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[70] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 '>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                           href="https://docs.google.com/document/d/1XCEsQsMHQh1be1dRqIax0G4q_qm01ja_180xMjZzFS8/edit?usp=sharing">
                            Resume <BsFillPersonLinesFill size={40}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;