import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser, FaCog, FaSignOutAlt, FaNewspaper, FaListAlt, FaFile, FaTags, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { baseURL } from '../utils/constant';

const Sidebar = () => {
    const [openSections, setOpenSections] = useState({
        author: false,
        article: false,
        category: false,
        source: false,
        tag: false,
        user: false,
    });
    const [authorCount, setAuthorCount] = useState(0);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await axios.get(`${baseURL}/authors`);
                setAuthorCount(response.data.length);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };

        fetchAuthors();
    }, []);

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-5">
            <nav>
                <ul className="space-y-2">
                    {/* Sidebar sections with dropdowns */}
                    {/* Example sections: Authors, Articles, Categories, Sources, Tags, Users */}
                    <li className="opcion-con-desplegable">
                        {/* Authors Section */}
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('author')}>
                            <div className="flex items-center">
                                <FaUser className="mr-2" />
                                <span>Authors</span>
                                <span className="ml-1 text-sm text-gray-400">({authorCount})</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['author'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['author'] ? '' : 'hidden'}`}>
                            {/* Submenu items for Authors */}
                            <li>
                                <a href="/createauthor" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Create Author
                                </a>
                            </li>
                            <li>
                                <a href="getauthor" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Show Author
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* Other sidebar sections (similar structure) */}
                    {/* Articles, Categories, Sources, Tags, Users */}
                    {/* Example: Articles Section */}
                    <li className="opcion-con-desplegable">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('article')}>
                            <div className="flex items-center">
                                <FaNewspaper className="mr-2" />
                                <span>Articles</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['article'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['article'] ? '' : 'hidden'}`}>
                            {/* Submenu items for Articles */}
                            <li>
                                <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Create Article
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Show Article
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* Category Section */}
                    <li className="opcion-con-desplegable">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('category')}>
                            <div className="flex items-center">
                                <FaListAlt className="mr-2" />
                                <span>Categories</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['category'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['category'] ? '' : 'hidden'}`}>
                            {/* Submenu items for Categories */}
                            <li>
                                <a href="/createcategory" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Create Category
                                </a>
                            </li>
                            <li>
                                <a href="/getcategory" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Show Category
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* Source Section */}
                    <li className="opcion-con-desplegable">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('source')}>
                            <div className="flex items-center">
                                <FaFile className="mr-2" />
                                <span>Sources</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['source'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['source'] ? '' : 'hidden'}`}>
                            {/* Submenu items for Sources */}
                            <li>
                                <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Create Source
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Show Source
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* Tag Section */}
                    <li className="opcion-con-desplegable">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('tag')}>
                            <div className="flex items-center">
                                <FaTags className="mr-2" />
                                <span>Tags</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['tag'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['tag'] ? '' : 'hidden'}`}>
                            {/* Submenu items for Tags */}
                            <li>
                                <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Create Tag
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Show Tag
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* User Section */}
                    <li className="opcion-con-desplegable">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('user')}>
                            <div className="flex items-center">
                                <FaUser className="mr-2" />
                                <span>Users</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['user'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['user'] ? '' : 'hidden'}`}>
                            {/* Submenu items for Users */}
                            <li>
                                <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Create User
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Show User
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* Logout and Settings Section */}
                    <li className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                        {/* Settings */}

                        <div className="flex items-center">
                            <FaCog className="mr-2" />
                            <span>Settings</span>
                        </div>
                    </li>
                    {/* Logout */}
                    <li className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                        <div className="flex items-center">
                            <FaSignOutAlt className="mr-2" />
                            <span>Logout</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
