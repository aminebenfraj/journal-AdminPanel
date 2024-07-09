import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../utils/constant';

export default function CreateCategory() {
    const navigate = useNavigate();
    const [categoryForm, setCategoryForm] = useState({ name: '', description: '' });

    const handleChange = (e) => {
        setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!categoryForm.name || !categoryForm.description) {
                console.error("Please fill in the name and description fields.");
                return;
            }

            const response = await axios.post(`${baseURL}/categories`, { ...categoryForm });
            console.log("Category added successfully:", response.data);
            navigate('/getcategory');
        } catch (error) {
            console.error("Error adding category:", error);
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
                            value={categoryForm.name}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-opacity-50"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description" className="text-gray-400 font-semibold text-sm">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={categoryForm.description}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 resize-none placeholder-opacity-50"
                        ></textarea>
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
