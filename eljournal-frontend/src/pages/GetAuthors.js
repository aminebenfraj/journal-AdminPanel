import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserTie } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { baseURL } from '../utils/constant';

export default function AuthorsPage() {
    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await axios.get(`${baseURL}/authors`);
                setAuthors(response.data);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };

        fetchAuthors();
    }, []);

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-6 bg-gray-800 rounded-t-lg">
                        <div className="flex items-center">
                            <FaUserTie className="text-white text-3xl mr-2" />
                            <h1 className="text-white text-2xl font-bold">Authors Management</h1>
                        </div>
                        <Link to="/createauthor" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300">
                            <FaUserTie className="mr-2" />
                            Create Author
                        </Link>
                    </div>
                    <div className="p-6">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">ID</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Biography</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {authors.map((author) => (
                                    <tr key={author.id}>
                                        <td className="px-4 py-2">{author.id}</td>
                                        <td className="px-4 py-2">{author.name}</td>
                                        <td className="px-4 py-2">{author.bio}</td>
                                        <td className="px-4 py-2">
                                            <Link
                                                to={`/authors/${author.id}`}
                                                className="text-blue-600 hover:text-blue-800 font-medium"
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
