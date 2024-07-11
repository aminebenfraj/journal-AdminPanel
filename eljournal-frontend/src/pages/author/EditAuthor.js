import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser, FaEdit } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';

export default function EditAuthor() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [authorForm, setAuthorForm] = useState({ name: '', bio: '' });

    useEffect(() => {
        axios.get(`${baseURL}/authors/${id}`)
            .then((res) => {
                setAuthorForm(res.data);
            })
            .catch((error) => {
                console.error("Error getting author:", error);
            });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAuthorForm({ ...authorForm, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!authorForm.name || !authorForm.bio) {
            console.error("Please fill in all fields.");
            return;
        }

        axios.put(`${baseURL}/authors/${id}`, authorForm)
            .then(() => {
                navigate('/getauthor');
            })
            .catch((error) => {
                console.error("Error updating author:", error);
            });
    };

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-6 bg-gray-800 rounded-t-lg">
                        <div className="flex items-center">
                            <FaUser className="text-white text-3xl mr-2" />
                            <h1 className="text-white text-2xl font-bold">Edit Author</h1>
                        </div>
                    </div>
                    <div className="p-6">
                        <form className="grid grid-cols-1 gap-6 max-w-lg min-w-[400px] mx-auto bg-white p-8 rounded-xl border border-gray-300" onSubmit={handleSubmit}>
                            <div className="flex items-center border-b-2 border-gray-200 py-2">
                                <FaUser className="text-yellow-600 mr-2" />
                                <input
                                    className="w-full border-none focus:outline-none"
                                    placeholder="Author Name"
                                    value={authorForm.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-start border-b-2 border-gray-200 py-2">
                                <FaEdit className="text-green-600 mr-2 mt-1" />
                                <textarea
                                    className="w-full border-none focus:outline-none"
                                    placeholder="Author Biography"
                                    value={authorForm.bio}
                                    name="bio"
                                    rows="4"
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                className="flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
                                type="submit"
                            >
                                <FaEdit className="mr-2" /> Update Author
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
