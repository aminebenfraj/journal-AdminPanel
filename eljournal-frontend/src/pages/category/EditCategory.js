import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';

const EditCategory = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [categoryForm, setCategoryForm] = useState({ name: '', description: '' });

    useEffect(() => {
        axios.get(`${baseURL}/categories/${id}`)
            .then(response => {
                const { name, description } = response.data.category;
                setCategoryForm({ name, description });
            })
            .catch(error => {
                console.error('Error fetching category:', error);
            });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCategoryForm({ ...categoryForm, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!categoryForm.name || !categoryForm.description) {
            console.error("Please fill in all fields.");
            return;
        }

        axios.put(`${baseURL}/categories/${id}`, categoryForm)
            .then(() => {
                navigate('/getcategory'); // Navigate to categories list after update
            })
            .catch(error => {
                console.error('Error updating category:', error);
            });
    };

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-6 bg-gray-800 rounded-t-lg">
                        <div className="flex items-center">
                            <FaEdit className="text-white text-3xl mr-2" />
                            <h1 className="text-white text-2xl font-bold">Edit Category</h1>
                        </div>
                    </div>
                    <div className="p-6">
                        <form className="grid grid-cols-1 gap-6 max-w-lg min-w-[400px] mx-auto bg-white p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
                            <div className="flex items-center border-b-2 border-gray-200 py-2">
                                <input
                                    className="w-full border-none focus:outline-none"
                                    placeholder="Category Name"
                                    value={categoryForm.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-center border-b-2 border-gray-200 py-2">
                                <textarea
                                    className="w-full border-none focus:outline-none"
                                    placeholder="Category Description"
                                    value={categoryForm.description}
                                    name="description"
                                    rows="4"
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
                                type="submit"
                            >
                                <FaEdit className="mr-2" /> Update Category
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EditCategory;
