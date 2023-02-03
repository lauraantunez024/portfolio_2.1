import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
    return (
        <header className='bg-blue md:sticky top-0 z-10'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <a className='title=font font-medium text-eggshell mb-4 md:mb-0'>
                    <a href='#about' className='ml-3 text-xl'>
                       Laura Antunez's Portfolio
                    </a>
                </a>
                <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700'>
                    <a href="#projects" className='mr-5 text-yellow hover:text-eggshell'>
                        Portfolio
                    </a>
                    <a href="#skills" className='mr-5 text-yellow hover:text-eggshell'>
                        Skills
                    </a>
                    <a href='#testimonials' className='mr-5 text-yellow hover:text-eggshell'>
                        Testimonials
                    </a>
                </nav>
            </div>
        </header>
    )
    
}