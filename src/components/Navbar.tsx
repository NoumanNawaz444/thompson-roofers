"use client"
import React, { useState } from 'react';
import logo from "@/images/logo-nobg.jpg";
import Link from 'next/link';
import { Home, Info, Briefcase, Phone } from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center bg-transparent p-4 px-[5%]' id='navbar'>
            <div className="logo bg-white rounded-2xl p-2 flex justify-between items-center w-full">
                <img src={logo.src} alt="Logo" className='sm:w-[150px] w-[100px] h-auto invert' />
                <div className='flex justify-between items-center gap-4 px-8'>
                    <button
                        onClick={() => setOpen(!open)}
                        className="relative w-8 h-8 flex flex-col justify-center items-center group cursor-pointer border-none outline-none"
                    >
                        <span className={`block h-0.5 w-full bg-black transition-transform duration-300 ease-in-out ${open ? "translate-y-1 rotate-45" : "-translate-y-1.5"}`} />
                        <span className={`block h-0.5 w-full bg-black transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100 my-0.5"}`} />
                        <span className={`block h-0.5 w-full bg-black transition-transform duration-300 ease-in-out ${open ? "-translate-y-1 rotate-[-45deg]" : "translate-y-1.5"}`} />
                    </button>
                    <Link href="/contact" className="text-white hidden hover:rounded-full bg-yellow-800 px-7 h-[50px] sm:flex justify-center items-center uppercase font-semibold">Contact</Link>
                </div>
            </div>

            <div className="mobileNav">
                <div className={`absolute right-0 sm:px-[30px] p-[5%] sm:w-[600px] w-full top-0 -z-10 sm:pt-[180px] pt-[130px] h-screen flex flex-col justify-start items-start gap-4 bg-[#283C43] transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} text-white`}>
                    
                    <Link href="/home#navbar" onClick={() => setOpen(prev => !prev)} className="text-black rounded-xl w-full sm:capitalize sm:justify-start sm:px-0 sm:text-3xl sm:text-white sm:bg-transparent bg-white px-7 h-[50px] flex items-center gap-3 uppercase font-semibold">
                        <Home className="w-8 h-8 sm:text-white text-black" /> Home
                    </Link>
                    
                    <Link href="/about#navbar" onClick={() => setOpen(prev => !prev)} className="text-black rounded-xl w-full sm:capitalize sm:justify-start sm:px-0 sm:text-3xl sm:text-white sm:bg-transparent bg-white px-7 h-[50px] flex items-center gap-3 uppercase font-semibold">
                        <Info className="w-8 h-8 sm:text-white text-black" /> About
                    </Link>
                    
                    <Link href="/services#navbar" onClick={() => setOpen(prev => !prev)} className="text-black rounded-xl w-full sm:capitalize sm:justify-start sm:px-0 sm:text-3xl sm:text-white sm:bg-transparent bg-white px-7 h-[50px] flex items-center gap-3 uppercase font-semibold">
                        <Briefcase className="w-8 h-8 sm:text-white text-black" /> Services
                    </Link>
                    
                    <Link href="/contact#navbar" onClick={() => setOpen(prev => !prev)} className="text-black rounded-xl w-full sm:capitalize sm:justify-start sm:px-0 sm:text-3xl sm:text-white sm:bg-transparent bg-white px-7 h-[50px] flex items-center gap-3 uppercase font-semibold">
                        <Phone className="w-8 h-8 sm:text-white text-black" /> Contact
                    </Link>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
