import React from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import D from '../assets/D.svg'
function Navbar(props) {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-700 text-gray-300'>
            <div>
                <img src={D} alt="logo" style={{width:'130px'}}/>
            </div>
            {/*Menu section*/}
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/*Hamburger side bar*/}
        </div>
    );
}

export default Navbar;