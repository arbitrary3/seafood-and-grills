import { useState } from 'react';
import logo from './img/logo.png';

export default function Navbar({ isVisible, searchText, logInId }) {
    // State to toggle the visibility of the hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);

    // FUNCTION TO GENERATE OPTIONS FROM ARRAY
    const generateOptions = array => {
        return array.map((element, index) => {
            const id = `option-${index};`

            return (
                <a
                    id={id}
                    key={index}
                    className="text-lg"
                    href={element[1]} 
                    style={{ fontSize: '18px' }}
                >
                    {element[0]}
                </a>
            )
        })
    }

    
    const renderHamburgerMenu = () => {
        return (
            <div className={`fixed top-0 right-0 w-[250px] bg-white h-full p-5 z-40 shadow-md transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
                <div className="flex justify-end">
                    <button onClick={() => setMenuOpen(false)} className="text-2xl">X</button>
                </div>
                <div className="flex flex-col gap-6 mt-5 text-center">
                    {generateOptions([
                        ["Home", ""],
                        ["Order", ""],
                        [<span className="material-symbols-outlined text-blue-500 text-[33px]">account_circle</span>, ""]
                    ])}
                </div>
            </div>
        );
    }

    // Render the navbar
    return (
        <div className={`fixed flex flex-row justify-between w-full h-[70px] px-10 py-4 z-30 bg-white ${isVisible ? null : "animate-slideUp"}`}>
            {/* Logo */}
            <div className="flex flex-row gap-[15px]">
                <img className="w-[50px]" src={logo} alt="Iruwin Jay Seafood and Grills" />
            </div>

            {/* Desktop Menu */}
            <div className="flex flex-row gap-10 hidden sm:flex">
                <div className="flex gap-[15px]">
                    <input type="text" className="border rounded px-8 py-1" placeholder="Search product..." aria-label="Search" />
                    <button className="bg-black text-white rounded px-3 py-1">Search</button>
                </div>

                {generateOptions([
                    ["Home", ""],
                    ["Order", ""],
                    [<span className="material-symbols-outlined text-blue-500 text-[33px]">account_circle</span>, ""]
                ])}
            </div>

            {/* Mobile Menu - Hamburger Button */}
            <div className="sm:hidden flex items-center">
                <button
                    className="text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
                >
                    &#9776; {/* Hamburger Icon */}
                </button>
            </div>

            {/* Hamburger Menu */}
            {menuOpen && renderHamburgerMenu()}
        </div>
    )
}
