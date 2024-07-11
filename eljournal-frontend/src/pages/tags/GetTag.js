import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTag} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';

export default function GetTag() {
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/tags`)
            .then((res) => {
                setTags(res.data);
            })
            .catch((error) => {
                console.error("Error getting tags:", error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`${baseURL}/tags/${id}`)
            .then(() => {
                setTags(tags.filter(tag => tag.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting tag:", error);
            });
    };

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-6 bg-gray-800 rounded-t-lg">
                        <div className="flex items-center">
                            <FaTag className="text-white text-3xl mr-2" />
                            <h1 className="text-white text-2xl font-bold">Tags</h1>
                        </div>
                        <Link to="/createtag" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center shadow-md transition duration-300">
                            <FaTag className="mr-2" />
                            Create tag
                        </Link>
                    </div>
                    <div className="p-6">
                        {tags.length === 0 ? (
                            <p className="text-center text-gray-500">No tags found.</p>
                        ) : (
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {tags.map((tag) => (
                                        <tr key={tag.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{tag.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
                                                <Link to={`/tag/${tag.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                                                    View
                                                </Link>
                                                <button onClick={() => handleDelete(tag.id)} className="text-red-600 hover:text-red-800 font-medium">
                                                    Delete
                                                </button>
                                                <button onClick={() => navigate(`/edittag/${tag.id}`)} className="text-green-600 hover:text-green-800 font-medium">
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
