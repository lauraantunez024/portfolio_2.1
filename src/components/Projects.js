import React from 'react';

import { projects } from "../data";
import { CircleStackIcon } from '@heroicons/react/24/solid';

export default function Projects() {
    return (
        <section id='projects' className='text-eggshell bg-darkblue body-font'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-eggshell'>
                    Apps I've built
                    </h1>
                    <CircleStackIcon className='h-9 w-9 text-yellow mx-auto mb-2'/>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-eggshell'>
                    Hover for deets!
                    </p>
                </div>
            <div className='flex flex-wrap -m-4 items-center'>
                {projects.map((project) => (
                    <a href={project.deployedURL}
                        key={project.image}
                        className='sm:w-1/2 w-100 p-4'>
                        <div className='flex relative'>
                            <img
                            alt="gallery" 
                            className='absolute inset-0 w-full h-full object-cover object-center'
                            src={project.image} />
                            <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-darkblue opacity-0 hover:opacity-100'>
                                <h2 className='tracking-widest text-sm title-font font-medium text-blue-400 mb-1'> {project.subtitle}
                                </h2>
                                <h1 className='title-font text-lg font-medium text-white mb-3'>
                                    {project.title}
                                </h1>
                                <p className='leading-relaxed'>{project.description}</p>

                            </div>
                        </div>
                    </a>
                ))}
            </div>
            </div>
        </section>
    )

}