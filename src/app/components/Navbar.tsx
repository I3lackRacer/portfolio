"use client"

import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<>
        <nav className="bg-transparent backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-gray-200/30">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Portfolio</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a
                        href="/Tim Martin Süllner.pdf"
                        target="_blank"
                        className="hidden md:flex items-center text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-800 hover:to-green-900 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 transition-transform hover:scale-110 hover:animate-pulse animate-float-delay-100"
                    >
                        <img src="pdf-icon.svg" className="w-5 h-5 mr-2 invert"></img>
                        Just give me the CV!
                    </a>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white hover:text-gray-300">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white hover:text-gray-300">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white hover:text-gray-300">Projects</a>
                        </li>
                        <li>
                            <a href="mailto:tim.suellner@web.de" className="block py-2 px-3 text-white hover:text-gray-300">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}