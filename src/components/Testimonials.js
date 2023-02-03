import React from 'react';
import { testimonials } from '../data';
import { MegaphoneIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
    return(
        <section id='testimonials'>
            <div className='container px-5 py-10 mx-auto text-center'>
                <h1 className='sm:text-4xl text-3xl font-medium title-font text-center text-eggshell mb-6'>
                    Testimonials
                </h1>
                <MegaphoneIcon className='h-9 w-9 text-yellow inline-block'/>
                <div className='flex flex-wrap m-4 justify-center'>
                    {testimonials.map((testimonial) => (
                        <div className='p-4 md:w-1/2 w-full'> 
                        <div className='h-full bg-teal bg-opacity-40 p-8 rounded'>
                            <p className='leading-relaxed mb-6 text-eggshell'>
                                {testimonial.quote}
                            </p>
                            <div className='inline-flex items-center'> 
                            <img 
                            alt='Jacob Stevens LinkedIN Profile'
                            src={testimonial.image} 
                            className='w-12 rounded-full flexc-shrink-0 object-cover object-center'/>
                            </div>
                            <span className='flex-grow flex flex-col pl-4'>
                                <span className='title-font font-medium text-yellow'>
                                    {testimonial.name}
                                </span>
                                <span className='text-eggshell text-sm uppercase'>
                                    {testimonial.company}
                                </span>
                            </span>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
    
}