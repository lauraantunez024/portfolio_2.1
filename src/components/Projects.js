import React from 'react';

import { projects } from "../data";

export default function Projects() {
    return (
        <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
            <div className='flex flex-col w-full mb-20'>
                <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
                    Apps I've built
                </h1>
                <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                    Nonsense I guess
                </p>
            </div>
            <div className='flex flex-wrap -m-4'>
                {projects.map((project) => (
                    <a href={project.deployedURL}
                    key={project.image}
                    className='sm:w-1/2 w-100 p-4'>
                        <div className='flex relative'>
                            <img
                            alt="gallery" 
                            className='absolut inset-0 w-full h-full object-cover object-center'
                            src={project.image} />
                        </div>
                    </a>
                ))}
            </div>
            </div>
        </section>
    )

}