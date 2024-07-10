// GetSource.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaLink } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';

export default function GetSource() {
    const navigate = useNavigate();
    const [sources, setSources] = useState([]);

    useEffect(() => {
        const fetchSources = async () => {
            try {
                const response = await axios.get(`${baseURL}/sources`);
                setSources(response.data);
            } catch (error) {
                console.error('Error fetching sources:', error);
            }
        };

        fetchSources();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseURL}/sources/${id}`);
            // After deleting, fetch updated list of sources
            const response = await axios.get(`${baseURL}/sources`);
            setSources(response.data);
        } catch (error) {
            console.error('Error deleting source:', error);
        }
    };

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-6 bg-gray-800 rounded-t-lg">
                        <div className="flex items-center text-white">
                            <FaLink className="text-3xl mr-2" />
                            <h1 className="text-2xl font-bold">Sources Management</h1>
                        </div>
                        <Link to="/createsource" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center shadow-md transition duration-300">
                            <FaLink className="mr-2" />
                            Create Source
                        </Link>
                    </div>
                    <div className="p-6">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">ID</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">URL</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">RSS Feed URL</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {sources.map((source) => (
                                    <tr key={source.id}>
                                        <td className="px-4 py-2">{source.id}</td>
                                        <td className="px-4 py-2">{source.name}</td>
                                        <td className="px-4 py-2">{source.url}</td>
                                        <td className="px-4 py-2">{source.rss_feed_url}</td>
                                        <td className="px-4 py-2">
                                            <Link
                                                to={`/sources/${source.id}`}
                                                className="text-blue-600 hover:text-blue-800 font-medium mr-4"
                                            >
                                                View
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(source.id)}
                                                className="text-red-600 hover:text-red-800 font-medium mr-4"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                onClick={() => navigate(`/editsource/${source.id}`)}
                                                className="text-green-600 hover:text-green-800 font-medium"
                                            >
                                                Edit
                                            </button>
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
