import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser, FaHome, FaCog, FaSignOutAlt, FaNewspaper, FaListAlt, FaFile, FaTags, FaChevronDown, FaChevronRight } from 'react-icons/fa';
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
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <nav>
                <ul className="space-y-2">
                    <li key="home">
                        <a href="/#" className="block p-2 hover:bg-gray-700 flex items-center">
                            <FaHome className="mr-2" />
                            DashBoard
                        </a>
                    </li>

                    {/* Authors Section */}
                    <li className="opcion-con-desplegable" key="authors">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('author')}>
                            <div className="flex items-center">
                                <FaUser className="mr-2" />
                                <span>Authors</span>
                                <span className="ml-1 text-sm text-gray-400">({authorCount})</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['author'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['author'] ? '' : 'hidden'}`}>
                            <li key="create-author">
                                <a href="/createauthor" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Create Author
                                </a>
                            </li>
                            <li key="show-author">
                                <a href="/getauthor" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Show Author
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* Articles Section */}
                    <li className="opcion-con-desplegable" key="articles">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('article')}>
                            <div className="flex items-center">
                                <FaNewspaper className="mr-2" />
                                <span>Articles</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['article'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['article'] ? '' : 'hidden'}`}>
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
                    <li className="opcion-con-desplegable" key="categories">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('category')}>
                            <div className="flex items-center">
                                <FaListAlt className="mr-2" />
                                <span>Categories</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['category'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['category'] ? '' : 'hidden'}`}>
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
                    <li className="opcion-con-desplegable" key="sources">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('source')}>
                            <div className="flex items-center">
                                <FaFile className="mr-2" />
                                <span>Sources</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['source'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['source'] ? '' : 'hidden'}`}>
                            <li>
                                <a href="/createsource" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Create Source
                                </a>
                            </li>
                            <li>
                                <a href="/getsource" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Show Source
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* Tag Section */}
                    <li className="opcion-con-desplegable" key="tags">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('tag')}>
                            <div className="flex items-center">
                                <FaTags className="mr-2" />
                                <span>Tags</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['tag'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['tag'] ? '' : 'hidden'}`}>
                            <li>
                                <a href="/createtag" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Create Tag
                                </a>
                            </li>
                            <li>
                                <a href="/gettag" className="block p-2 hover:bg-gray-700 flex items-center">
                                    <FaChevronRight className="mr-2 text-xs" />
                                    Show Tag
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* User Section */}
                    <li className="opcion-con-desplegable" key="users">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection('user')}>
                            <div className="flex items-center">
                                <FaUser className="mr-2" />
                                <span>Users</span>
                            </div>
                            <FaChevronDown className={`text-xs ${openSections['user'] ? 'rotate-180' : ''}`} />
                        </div>
                        <ul className={`desplegable ml-4 ${openSections['user'] ? '' : 'hidden'}`}>
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

                    {/* Settings */}
                    <li className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" key="settings">
                        <div className="flex items-center">
                            <FaCog className="mr-2" />
                            <span>Settings</span>
                        </div>
                    </li>

                    {/* Logout */}
                    <li className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer" key="logout">
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
