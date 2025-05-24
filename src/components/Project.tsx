import { ArrowRightSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ProjectImage from '@/images/project.jpeg'

function Project() {
    return (
        <div className='bg-yellow-900/10 flex flex-col items-center justify-center text-black '>
            <div className='py-16 px-6 flex justify-between gap-6 flex-col md:flex-row'>
                <div className='flex flex-col items-start justify-center text-start mb-8 md:max-w-2/4 gap-y-4 font-semibold'> 
                    <span className='md:text-3xl text-xl text-yellow-800'>Your project starts here</span>
                    <h1 className='md:text-5xl text-2xl'>Book an Architects <br className='block' />
                        Home Visit</h1>
                    <Link href="/contact">
                        <button className="bg-yellow-900 text-white px-4 py-2 rounded md:text-2xl cursor-pointer hover:bg-yellow-800 transition duration-300">
                            Book A Home Visit <ArrowRightSquare className="inline" />
                        </button>
                    </Link>
                </div>
                <p className='md:max-w-2/4 md:text-2xl  '>If you have big plans for your home or development project, but you’re not sure where to start or what’s feasible for your space, this service is for you. We’ll visit your home or property, explore potential design concepts with you, and give you all the information you need to move forward with your project.
                </p>
            </div>
            <img src={ProjectImage.src} alt="Project"  className='w-full h-auto' />
        </div>
    )
}

export default Project