import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../utils/constant';

export default function CreateArticle() {
    const navigate = useNavigate();
    const [articleForm, setArticleForm] = useState({ title: '', content: '', published_at: '', category_id: '', author_id: '', source_id: '' });
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [sources, setSources] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/categories`)
            .then((res) => setCategories(res.data))
            .catch((error) => console.error("Error fetching categories:", error));

        axios.get(`${baseURL}/authors`)
            .then((res) => setAuthors(res.data))
            .catch((error) => console.error("Error fetching authors:", error));

        axios.get(`${baseURL}/sources`)
            .then((res) => setSources(res.data))
            .catch((error) => console.error("Error fetching sources:", error));
    }, []);

    const handleChange = (e) => {
        setArticleForm({ ...articleForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!articleForm.title || !articleForm.content || !articleForm.category_id || !articleForm.author_id) {
                console.error("Please fill in all required fields.");
                return;
            }

            const response = await axios.post(`${baseURL}/articles`, articleForm);
            console.log("Article added successfully:", response.data);
            navigate('/getarticle');
        } catch (error) {
            console.error("Error adding article:", error);
        }
    }

    return (
        <div className="flex items-start pt-28 justify-center h-screen bg-gray-900 overflow-auto pb-28">
            <div className="max-w-2xl w-full bg-gray-800 border border-transparent rounded-lg shadow-lg shadow-gray-800 p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title" className="text-gray-400 font-semibold text-sm">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={articleForm.title}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-opacity-50"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="content" className="text-gray-400 font-semibold text-sm">Content:</label>
                        <textarea
                            id="content"
                            name="content"
                            value={articleForm.content}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 resize-none placeholder-opacity-50"
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="published_at" className="text-gray-400 font-semibold text-sm">Published At:</label>
                        <input
                            type="date"
                            id="published_at"
                            name="published_at"
                            value={articleForm.published_at}
                            onChange={handleChange}
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-opacity-50"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="category_id" className="text-gray-400 font-semibold text-sm">Category:</label>
                        <select
                            id="category_id"
                            name="category_id"
                            value={articleForm.category_id}
                            onChange={handleChange}
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                        >
                            <option className='text-black' value="">Select Category</option>
                            {categories.map((category) => (
                                <option className='text-black' key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="author_id" className="text-gray-400 font-semibold text-sm">Author:</label>
                        <select
                            id="author_id"
                            name="author_id"
                            value={articleForm.author_id}
                            onChange={handleChange}
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                        >
                            <option className='text-black' value="">Select Author</option>
                            {authors.map((author) => (
                                <option className='text-black' key={author.id} value={author.id}>{author.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="source_id" className="text-gray-400 font-semibold text-sm">Source:</label>
                        <select
                            id="source_id"
                            name="source_id"
                            value={articleForm.source_id}
                            onChange={handleChange}
                            className="px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                        >
                            <option className='text-black' value="">Select Source (optional)</option>
                            {sources.map((source) => (
                                <option className='text-black' key={source.id} value={source.id}>{source.name}</option>
                            ))}
                        </select>
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
