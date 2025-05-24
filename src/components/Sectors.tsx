import Link from 'next/link';
import React from 'react';
import projectOneImage from '@/images/project-1.jpeg';
import projectTwoImage from '@/images/project-2.jpeg';
import projectThreeImage from '@/images/project-3.jpeg';
import projectFourImage from '@/images/project-4.jpeg';
import { ArrowRightSquare } from "lucide-react"

function Sectors() {
    const sectors = [
        {
            title: 'Bespoke Homes',
            photo: projectOneImage.src
        },
        {
            title: 'Low Carbon Housing',
            photo: projectTwoImage.src
        },
        {
            title: 'Affordable Housing',
            photo: projectThreeImage.src
        },
        {
            title: 'Private Developments',
            photo: projectFourImage.src
        }
    ];

    return (
        <section className="px-6 py-16 bg-white text-black">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-[3%]">
                <h1 className="text-4xl font-bold tracking-tight mb-4 md:mb-0 font-mono text-yellow-800">What We Do</h1>
                <Link
                    href="/projects"
                    className="group text-yellow-900 font-medium text-2xl relative inline-block"
                >
                    View All Projects <ArrowRightSquare className="inline-block ml-2" />
                    <span className="block h-1 bg-yellow-900 rounded-full mt-2 w-full transition-all  group-hover:w-0 duration-400"></span>
                </Link>

            </div>

            <div className="flex flex-wrap gap-y-12 -mx-4">
                {sectors.map((sector, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/4 px-4 flex flex-col gap-4"
                    >
                        <div className="relative min-h-[500px] max-h-[500px] rounded-lg overflow-hidden shadow-md">
                            <img
                                src={sector.photo}
                                alt={sector.title}
                                className="object-cover w-full min-h-full hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <Link href="/contact#contact" className="text-xl font-semibold text-yellow-900 font-mono  transition-colors">
                            {sector.title}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Sectors;
