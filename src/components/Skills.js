import React from 'react';
import { skills } from '../data';
import { RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/solid'


export default function Skills() {
    return (
        <section id='skills'>
            <div className='container px-5 py-10 mx-auto'>
                <div className='text-center mb-20'>
                    <h1 className='sm:text-4xl text-3xl font-medium title-font text-eggshell mb-4'>
                        Skills and Languages
                    </h1>
                    <RocketLaunchIcon className=' w-10 inline-block mb-4 text-yellow '/>
                    <p className='text-eggshell leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
                        (so far)
                    </p> 
                </div>
                <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 '>
                    {skills.map((skill) => (
                        <div key={skill} className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-blue rounded flex p-4 h-full items-center'>
                                <SparklesIcon className='text-yellow w-5 h-5 flex-shrink-0 mr-4'/>
                                <span className='title-font font-medium text-eggshell'>
                                    {skill}
                                </span>
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
        </section>
    )

    
}