import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTag } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { baseURL } from '../../utils/constant';

export default function GetCategory() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${baseURL}/categories`);
                console.log(response.data);
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseURL}/categories/${id}`);
            // After deleting, fetch updated list of categories
            const response = await axios.get(`${baseURL}/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-6 bg-gray-800 rounded-t-lg">
                        <div className="flex items-center">
                            <FaTag className="text-white text-3xl mr-2" />
                            <h1 className="text-white text-2xl font-bold">Categories Management</h1>
                        </div>
                        <Link to="/createcategory" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300">
                            <FaTag className="mr-2" />
                            Create Category
                        </Link>
                    </div>
                    <div className="p-6">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">ID</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Description</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {categories.map((category) => (
                                    <tr key={category.id}>
                                        <td className="px-4 py-2">{category.id}</td>
                                        <td className="px-4 py-2">{category.name}</td>
                                        <td className="px-4 py-2">{category.description}</td>
                                        <td className="px-4 py-2">
                                            <Link
                                                to={`/categories/${category.id}`}
                                                className="text-blue-600 hover:text-blue-800 font-medium mr-4"
                                            >
                                                View
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(category.id)}
                                                className="text-red-600 hover:text-red-800 font-medium mr-4"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                onClick={() => navigate(`/editcategory/${category.id}`)}
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
