import React from 'react';

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-slate-700 flex justify-center items-center p-4'>
            <form action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-gray-300 text-4xl inline border-b-4 border-emerald-400 text-gray-300 '>Contact Me</p>
                    <p className='text-gray-300 py-5'>Submit the form below, Can't wait to hear from you</p>
                </div>
                <input className='my-4 p-2 rounded-lg' type="text" placeholder='Name' name='name'/>
                <input className='my-4 p-2 rounded-lg' type="email" placeholder='Email' name='Email'/>
                <textarea className='rounded-lg p-2' name="message" rows="10" placeholder='Message'></textarea>
            </form>
        </div>
    );
}

export default Contact;