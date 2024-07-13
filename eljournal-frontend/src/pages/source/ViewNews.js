// src/pages/ViewNews.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../utils/constant';
import RssFeedCard from '../../components/RssFeedCard';

const ViewNews = () => {
    const { id } = useParams();
    const [rssItems, setRssItems] = useState([]);
    const [error, setError] = useState(null);
    const [sourceName, setSourceName] = useState('');

    useEffect(() => {
        const fetchSource = async () => {
            try {
                const response = await axios.get(`${baseURL}/sources/${id}`);
                const source = response.data;
                setSourceName(source.name);

                const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
                const rssResponse = await axios.get(proxyUrl + source.rss_feed_url);
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(rssResponse.data, 'text/xml');

                if (xmlDoc.getElementsByTagName('parsererror').length) {
                    throw new Error('Error parsing XML');
                }

                const items = Array.from(xmlDoc.querySelectorAll('item, entry'));
                setRssItems(items);
            } catch (error) {
                setError(error);
                console.error('Error fetching or parsing RSS feed:', error);
            }
        };

        fetchSource();
    }, [id]);

    if (error) {
        return <div className="text-red-500 text-center mt-4">Error: {error.message}</div>;
    }

    if (!rssItems.length) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-4 text-center">{sourceName} News</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rssItems.map((item, index) => (
                                <RssFeedCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ViewNews;
