
import React, { useState, useRef } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';


interface MainLayoutProps {
    children: React.ReactNode;
    bgClassName?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, bgClassName }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [journeySubOpen, setJourneySubOpen] = useState(false); // center dropdown
    const [journeyNavOpen, setJourneyNavOpen] = useState(false); // right navbar dropdown
    const [search, setSearch] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const suggestions = [
        { label: "Home", anchor: "#hero" },
        { label: "About", anchor: "#about" },
        { label: "My Journey", anchor: "#journey" },
        { label: "Timeline", anchor: "#journey" },
        { label: "Experience", anchor: "#heroku" },
        { label: "Projects", anchor: "#projects" },
        { label: "Contact", anchor: "#contact" },
    ];
    const filteredSuggestions = search
        ? suggestions.filter(s => s.label.toLowerCase().includes(search.toLowerCase()))
        : [];
    return (
        <div className={(bgClassName ? bgClassName + ' ' : '') + 'flex flex-col min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors'}>
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 bg-opacity-95 backdrop-blur flex flex-row items-center px-2 sm:px-4 md:px-12 py-3 w-full max-w-full transition-colors border-b border-gray-200 dark:border-gray-800">
                {/* Left: Logo */}
                <div className="flex items-center gap-3 flex-shrink-0 pr-4 sm:pr-6">
                    <img src="src/assets/npbe_cgaw_210603.jpg" alt="Logo" className="w-8 h-8 mx-auto rounded-full border border-gray-300 dark:border-gray-700" />
                    <span className="font-bold text-lg text-gray-900 dark:text-gray-100 tracking-wide">Frontworkers</span>
                </div>
                {/* Center: Search and Dropdown */}
                <div className="flex-1 flex flex-row justify-center items-center gap-2 sm:gap-6 md:gap-8 min-w-0">
                    {/* Search Bar */}
                    <div className="relative w-32 sm:w-48 md:w-64 lg:w-72 min-w-0 flex-shrink">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search..."
                            className="w-full rounded-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={search}
                            onChange={e => {
                                setSearch(e.target.value);
                                setShowSuggestions(true);
                            }}
                            onFocus={() => search && setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" /><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                        </span>
                        {showSuggestions && filteredSuggestions.length > 0 && (
                            <div className="absolute left-0 mt-1 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 max-h-56 overflow-y-auto border border-gray-200 dark:border-gray-700">
                                {filteredSuggestions.map(s => (
                                    <a
                                        key={s.label}
                                        href={s.anchor}
                                        className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition cursor-pointer"
                                        onClick={() => {
                                            setSearch("");
                                            setShowSuggestions(false);
                                        }}
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Multi-level Dropdown */}
                    <div className="relative group min-w-0 flex-shrink">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 transition font-semibold focus:outline-none">
                            Sections
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition pointer-events-auto z-50 flex flex-col items-center">
                            <a href="#hero" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition w-full text-center">Home</a>
                            <a href="#about" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition w-full text-center">About</a>
                            <div className="relative w-full flex justify-center">
                                <button
                                        className={
                                            `flex items-center justify-between w-full px-4 py-2 text-gray-900 dark:text-gray-100 rounded transition font-normal text-center ` +
                                            (journeySubOpen ? 'bg-blue-100 dark:bg-gray-700' : 'bg-transparent') +
                                            ' hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 active:bg-blue-100 dark:active:bg-gray-700'
                                        }
                                    style={{ background: journeySubOpen ? undefined : 'transparent' }}
                                    onClick={e => {
                                        e.preventDefault();
                                        setJourneySubOpen(v => !v);
                                    }}
                                    onBlur={e => {
                                        // Only close if focus moves outside the submenu
                                        if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                                            setJourneySubOpen(false);
                                        }
                                    }}
                                    aria-haspopup="true"
                                    aria-expanded={journeySubOpen}
                                >
                                    <span className="flex-1 text-center">My Journey</span>
                                    <span className="flex-shrink-0 ml-2 flex items-center justify-end">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                    </span>
                                </button>
                                {journeySubOpen && (
                                    <div
                                        className="absolute left-full top-0 mt-0 ml-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
                                    >
                                        <a href="#journey" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setJourneySubOpen(false)}>Timeline</a>
                                        <a href="#projects" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setJourneySubOpen(false)}>Projects</a>
                                        <a href="#heroku" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setJourneySubOpen(false)}>Experience</a>
                                    </div>
                                )}
                            </div>
                            <a href="#contact" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition w-full text-center">Contact</a>
                        </div>
                    </div>
                </div>
                {/* Right: Section Links */}
                <nav className="hidden md:flex flex-wrap items-center space-x-4 md:space-x-8 lg:space-x-12 ml-4 sm:ml-8">
                    <a href="#hero" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition">Home</a>
                    <a href="#about" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition">About</a>
                    <div className="relative">
                        <button
                            className={
                                "text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition flex items-center justify-between w-44 px-3 py-2 rounded focus:outline-none z-50 " +
                                (journeyNavOpen ? "bg-blue-100 dark:bg-gray-700" : "bg-transparent")
                            }
                            style={{ background: journeyNavOpen ? undefined : "transparent" }}
                            onClick={e => {
                                e.preventDefault();
                                setJourneyNavOpen(v => !v);
                            }}
                            aria-haspopup="true"
                            aria-expanded={journeyNavOpen}
                        >
                            <span>My Journey</span>
                            <span className="flex items-center justify-end ml-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        {journeyNavOpen && (
                            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-40">
                                <a href="#journey" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setJourneyNavOpen(false)}>Timeline</a>
                                <a href="#projects" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setJourneyNavOpen(false)}>Projects</a>
                                <a href="#heroku" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setJourneyNavOpen(false)}>Experience</a>
                            </div>
                        )}
                    </div>
                    <a href="#contact" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition">Contact</a>
                </nav>
                {/* Theme Switcher */}
                <div className="ml-2 flex items-center">
                    <ThemeSwitcher />
                </div>
                <button className="flex items-center p-2 ml-2 md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
                    <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {/* Mobile menu */}
                {menuOpen && (
                    <div className="fixed inset-0 z-50 flex flex-col items-end bg-black/40 md:hidden" onClick={() => setMenuOpen(false)}>
                        <div className="mt-16 mr-4 w-60 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col py-2 animate-fade-in space-y-2" onClick={e => e.stopPropagation()}>
                            <a href="#hero" className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setMenuOpen(false)}>Home</a>
                            <a href="#about" className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setMenuOpen(false)}>About</a>
                            <a href="#journey" className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setMenuOpen(false)}>My Journey</a>
                            <a href="#projects" className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setMenuOpen(false)}>Projects</a>
                            <a href="#heroku" className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setMenuOpen(false)}>Experience</a>
                            <a href="#contact" className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition" onClick={() => setMenuOpen(false)}>Contact</a>
                        </div>
                    </div>
                )}
            </header>
            <main className="flex-1 w-full flex flex-col items-center justify-start">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
