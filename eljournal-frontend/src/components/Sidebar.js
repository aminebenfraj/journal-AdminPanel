// ./components/Sidebar.jsx

import React, { useState } from 'react';

const Sidebar = () => {
    const [openSections, setOpenSections] = useState({
        article: false,
        author: false,
        category: false,
        source: false,
        tag: false,
        user: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="relative flex h-[calc(100vh-2rem)] w-full max-w-[20rem] flex-col rounded-xl bg-white p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
            <div className="p-4 mb-2">
                <h5 className="text-xl font-semibold text-blue-gray-900">Sidebar</h5>
            </div>
            <nav className="flex flex-col gap-2 p-2 text-base font-normal text-blue-gray-700">
                {['article', 'author', 'category', 'source', 'tag', 'user'].map((section) => (
                    <div key={section}>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-3 text-left text-xl font-semibold text-blue-gray-700 hover:text-blue-gray-900"
                            onClick={() => toggleSection(section)}
                        >
                            <span>Create {section.charAt(0).toUpperCase() + section.slice(1)}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className={`w-4 h-4 transition-transform ${openSections[section] ? 'rotate-180' : ''
                                    }`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {openSections[section] && (
                            <div className="pl-4">
                                <button className="block w-full p-2 text-left hover:bg-blue-gray-50">Edit {section.charAt(0).toUpperCase() + section.slice(1)}</button>
                                <button className="block w-full p-2 text-left hover:bg-blue-gray-50">Add {section.charAt(0).toUpperCase() + section.slice(1)}</button>
                                <button className="block w-full p-2 text-left hover:bg-blue-gray-50">Show {section.charAt(0).toUpperCase() + section.slice(1)}</button>
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
