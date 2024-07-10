// CreateSource.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../utils/constant';

export default function CreateSource() {
    const navigate = useNavigate();
    const [sourceForm, setSourceForm] = useState({ name: '', url: '', rss_feed_url: '' });

    const handleChange = (e) => {
        setSourceForm({ ...sourceForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!sourceForm.name || !sourceForm.url || !sourceForm.rss_feed_url) {
                console.error("Please fill in all fields.");
                return;
            }

            const response = await axios.post(`${baseURL}/sources`, { ...sourceForm });
            console.log("Source added successfully:", response.data);
            navigate('/getsources');
        } catch (error) {
            console.error("Error adding source:", error);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-2xl w-full bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 border border-transparent rounded-lg shadow-lg p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-gray-400 font-semibold text-sm">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={sourceForm.name}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-opacity-50"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="url" className="text-gray-400 font-semibold text-sm">URL:</label>
                        <input
                            type="url"
                            id="url"
                            name="url"
                            value={sourceForm.url}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-opacity-50"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="rss_feed_url" className="text-gray-400 font-semibold text-sm">RSS Feed URL:</label>
                        <input
                            type="url"
                            id="rss_feed_url"
                            name="rss_feed_url"
                            value={sourceForm.rss_feed_url}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-opacity-50"
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex items-center justify-center self-start font-semibold text-gray-400 bg-gray-800 border border-gray-600 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-gray-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
