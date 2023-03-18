import React from 'react';

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-slate-700 flex justify-center items-center p-4'>
            {/*the link for the getform submission will be placed in the action section of the form*/}
            <form method='POST' action="https://getform.io/f/8a60f29a-a501-4d00-bfed-4b49347f5270" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-4'>
                    <p className='text-gray-300 text-4xl inline border-b-4 border-emerald-400 text-gray-300 '>Contact Me</p>
                    <p className='text-gray-300 py-5'>Submit the form below, Can't wait to hear from you</p>
                </div>
                <input className='my-4 p-2 rounded-lg' type="text" placeholder='Name' name='name'/>
                <input className='my-3 p-2 rounded-lg' type="email" placeholder='Email' name='Email'/>
                <textarea className='rounded-lg p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-emerald-400 hover:border-emerald-400 px-4 py-3 my-8 mx-auto flex items-center  '>Connect with me </button>
            </form>
        </div>
    );
}

export default Contact;