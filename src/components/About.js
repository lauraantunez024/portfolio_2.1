import React from 'react';
import { CheckIcon, BookOpenIcon, CodeBracketSquareIcon } from '@heroicons/react/24/solid'
import Laura from '../images/Laura_Antunez_hr.png'

export default function About() {
    return (
        <section id = "about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items=-center">
                <div className="lg:flex-grow lg:pl-24 md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-eggshell">
                        Hello!
                    <br className="hidden lg:inline-block" /> It's a pleasure to meet you.
                    </h1>
                    <p className="mb-8 leading-relaxed text-eggshell">
                    <CheckIcon className="h-5 w-5 text-yellow inline mr-1"/>  
                        Quality Assurance Engineer <br className=" lg:inline-block" />  
                        <CodeBracketSquareIcon className="h-5 w-5 text-yellow inline mr-1"/>
                          Aspiring Full Stack Developer <br className=" lg:inline-block" />  
                          <BookOpenIcon className="h-5 w-5 text-yellow inline mr-1"/>
                          Lover of knowledge
                    </p>
                    <div className='flex justify-center'>
                        {/* <a
                        href="#projects"
                        className='inline-flex text-eggshell bg-teal bg-opacity-40 border-0 py-2 px-6 focus:outline-none hover:bg-greendark rounded text-lg'>
                            Stuff I've made
                        </a> */}
                        <a
                        href='#contact'
                        className='ml-4 inline-flex hover:text-eggshell hover:bg-teal hover:bg-opacity-40 border-0 py-2 text-yellow px-6 focus:outline-none bg-greendark rounded text-lg'
                        >
                            Want to work together?

                        </a>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:ml-4 md:w-1/2 w-5/6 sm:justify-center flex'>
                    <img
                    className='object-cover object-center flex rounded max-w-xs'
                    alt="Author photo"
                    src= {Laura}
                    />
                </div>
            </div>

        </section>
    )

}