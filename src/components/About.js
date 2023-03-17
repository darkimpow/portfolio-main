import React from 'react';

function About() {
    return (
        <div name='about' className='w-full h-screen bg-slate-700 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-emerald-400 '>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi Im Darkim, nice to meet you. Stay awhile this is a cozy place</p>
                    </div>
                    <div>
                        <p>
                            Highly motivated and results-driven professional with a background in exercise science and a passion for technology. Leveraged curiosity and determination to successfully transition into a full stack software engineering role, utilizing expertise in problem-solving and critical thinking to deliver innovative solutions. Proven ability to learn quickly and adapt to new technologies and programming languages. Committed to staying up to date with industry trends and best practices to deliver high-quality results.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;