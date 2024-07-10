import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaLink, FaEdit } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';

export default function EditSource() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [sourceForm, setSourceForm] = useState({ name: '', url: '', rss_feed_url: '' });

    useEffect(() => {
        axios.get(`${baseURL}/sources/${id}`)
            .then((res) => {
                setSourceForm(res.data);
            })
            .catch((error) => {
                console.error("Error getting source:", error);
            });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSourceForm({ ...sourceForm, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!sourceForm.name || !sourceForm.url || !sourceForm.rss_feed_url) {
            console.error("Please fill in all fields.");
            return;
        }

        axios.put(`${baseURL}/sources/${id}`, sourceForm)
            .then(() => {
                navigate('/getsource');
            })
            .catch((error) => {
                console.error("Error updating source:", error);
            });
    };

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-6 bg-gray-800 rounded-t-lg">
                        <div className="flex items-center">
                            <FaLink className="text-white text-3xl mr-2" />
                            <h1 className="text-white text-2xl font-bold">Edit Source</h1>
                        </div>
                    </div>
                    <div className="p-6">
                        <form className="grid grid-cols-1 gap-6 max-w-lg min-w-[400px] mx-auto bg-white p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
                            <div className="flex items-center border-b-2 border-gray-200 py-2">
                                <FaLink className="text-blue-600 mr-2" />
                                <input
                                    className="w-full border-none focus:outline-none"
                                    placeholder="Source Name"
                                    value={sourceForm.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-center border-b-2 border-gray-200 py-2">
                                <FaLink className="text-blue-600 mr-2" />
                                <input
                                    className="w-full border-none focus:outline-none"
                                    placeholder="URL"
                                    value={sourceForm.url}
                                    name="url"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-center border-b-2 border-gray-200 py-2">
                                <FaLink className="text-blue-600 mr-2" />
                                <input
                                    className="w-full border-none focus:outline-none"
                                    placeholder="RSS Feed URL"
                                    value={sourceForm.rss_feed_url}
                                    name="rss_feed_url"
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
                                type="submit"
                            >
                                <FaEdit className="mr-2" /> Update Source
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
