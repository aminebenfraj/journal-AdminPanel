import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaUsers, FaTags, FaFileAlt, FaCube, FaNewspaper as FaArticles, FaUser } from 'react-icons/fa';
import { baseURL } from '../utils/constant';

export default function Dashboard() {
    const [authorCount, setAuthorCount] = useState(0);
    const [sourceCount, setSourceCount] = useState(0);
    const [articleCount, setArticleCount] = useState(0);
    const [tagCount, setTagCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await axios.get(`${baseURL}/authors`);
                setAuthorCount(response.data.length);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${baseURL}/users`);
                setUserCount(response.data.length);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        const fetchTags = async () => {
            try {
                const response = await axios.get(`${baseURL}/tags`);
                setTagCount(response.data.length);
            } catch (error) {
                console.error('Error fetching tags:', error);
            }
        };

        const fetchSources = async () => {
            try {
                const response = await axios.get(`${baseURL}/sources`);
                setSourceCount(response.data.length);
            } catch (error) {
                console.error('Error fetching sources:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${baseURL}/categories`);
                setCategoryCount(response.data.length);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${baseURL}/articles`);
                setArticleCount(response.data.length);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchAuthors();
        fetchUsers();
        fetchTags();
        fetchSources();
        fetchCategories();
        fetchArticles();
    }, []);

    return (
        <div className="bg-gray-900 text-white">
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-4xl mb-8 text-center font-bold text-white font-quicksand">ADMIN PANEL DASHBOARD</h1>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <FaUser className="text-white w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-white">{authorCount}</h2>
                                <p className="leading-relaxed">Authors</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <FaUsers className="text-white w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-white">{userCount}</h2>
                                <p className="leading-relaxed">Users</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <FaTags className="text-white w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-white">{tagCount}</h2>
                                <p className="leading-relaxed">Tags</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <FaArticles className="text-white w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-white">{articleCount}</h2>
                                <p className="leading-relaxed">Articles</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <FaCube className="text-white w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-white">{sourceCount}</h2>
                                <p className="leading-relaxed">Sources</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <FaFileAlt className="text-white w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-white">{categoryCount}</h2>
                                <p className="leading-relaxed">Categories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
