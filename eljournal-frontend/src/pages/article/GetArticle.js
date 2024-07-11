import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseURL } from '../../utils/constant';

const GetArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${baseURL}/articles`);
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseURL}/articles/${id}`);
            // After deleting, fetch updated list of articles
            const response = await axios.get(`${baseURL}/articles`);
            setArticles(response.data);
        } catch (error) {
            console.error('Error deleting article:', error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between p-6 bg-gray-800 rounded-t-lg">
                    <h1 className="text-2xl font-bold text-white">Articles Management</h1>
                    <Link
                        to="/createarticle"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center shadow-md transition duration-300"
                    >
                        Create Article
                    </Link>
                </div>
                <div className="p-6">
                    <table className="w-full table-auto">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">ID</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Title</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Content</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Published At</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Category ID</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Author ID</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Source ID</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {articles.map((article) => (
                                <tr key={article.id}>
                                    <td className="px-4 py-2">{article.id}</td>
                                    <td className="px-4 py-2">{article.title}</td>
                                    <td className="px-4 py-2">{article.content}</td>
                                    <td className="px-4 py-2">{article.published_at}</td>
                                    <td className="px-4 py-2">{article.category_id}</td>
                                    <td className="px-4 py-2">{article.author_id}</td>
                                    <td className="px-4 py-2">{article.source_id}</td>
                                    <td className="px-4 py-2">
                                        <Link
                                            to={`/articles/${article.id}`}
                                            className="text-blue-600 hover:text-blue-800 font-medium mr-4"
                                        >
                                            View
                                        </Link>
                                        <Link
                                            to={`/editarticle/${article.id}`}
                                            className="text-green-600 hover:text-green-800 font-medium mr-4"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(article.id)}
                                            className="text-red-600 hover:text-red-800 font-medium mr-4"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GetArticles;
