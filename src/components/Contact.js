import React from 'react';
import { contacts } from '../data';
import { EnvelopeIcon, PhoneIcon, UserGroupIcon, DocumentIcon, ComputerDesktopIcon, MapPinIcon } from '@heroicons/react/24/solid';
import Resume from '../Resume2022.pdf'

export default function Contact() {
    return(
        <section id='contact'>
            <div className='container px-5 py-10 mx-auto text-center'>
                <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-6'>
                   How to reach me
                </h1>
            
                <MapPinIcon className='h-9 w-9 text-blue-400 inline-block' />
                <div className='flex flex-wrap m-4 justify-center'>
                    {contacts.map((contact) => (
                        <div className='p-4 md:w-1/2 w-full'>
                            <div className='h-full bg-gray-800 bg-opacity-40 p-8 rounded'>
                                <span className='title-font text-center font-medium text-white '>
                                   <EnvelopeIcon className='h-4 w-4 text-blue-400 inline'/> Email: <br></br> {contact.email}
                                </span>
                                <br></br>
                                <br></br>
                                <span className='title-font font-medium text-white text-center'>
                                <PhoneIcon className='h-4 w-4 text-blue-400 inline mr-1'/>Phone: <br></br> {contact.phoneNumber}
                                </span>
                                <br></br>
                                <br></br>
                                <a className='hover:text-blue-400 title-font font-medium text-white'href={contact.LinkedIN} target="_blank" rel="noreferrer"> <UserGroupIcon className='h-4 w-4 text-blue-400 inline mr-1'/>LinkedIn</a>
                                <br></br>
                                <br></br>
                                <ComputerDesktopIcon className='w-4 h-4 text-blue-400 inline mr-1'/>
                                <a className='hover:text-blue-400 title-font font-medium text-white'href={contact.Github} target="_blank" rel="noreferrer">Github</a>
                                <br></br>
                                <br></br> <DocumentIcon className='w-4 h-4 text-blue-400 inline mr-1'/>
                                <a className='hover:text-blue-400 title-font font-medium text-white'href={Resume}>Resume</a>

                               
                            </div>
                        </div>
                    
                    ))}
                </div>
           
            </div>
        </section>
    )

}