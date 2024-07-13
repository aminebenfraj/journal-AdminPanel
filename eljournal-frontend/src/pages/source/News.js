// src/pages/News.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../utils/constant';
import RssFeedCard from '../../components/RssFeedCard';

export default function News() {
    const [rssFeeds, setRssFeeds] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSources = async () => {
            try {
                const response = await axios.get(`${baseURL}/sources`);
                const sources = response.data;

                const fetchRssData = async (url) => {
                    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
                    const rssResponse = await axios.get(proxyUrl + url);
                    return rssResponse.data;
                };

                const parseXML = (data) => {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(data, 'text/xml');

                    if (xmlDoc.getElementsByTagName('parsererror').length) {
                        throw new Error('Error parsing XML');
                    }

                    return xmlDoc.querySelectorAll('item, entry');
                };

                const feeds = {};
                for (const source of sources) {
                    try {
                        const data = await fetchRssData(source.rss_feed_url);
                        const items = parseXML(data);
                        feeds[source.name] = Array.from(items);
                    } catch (error) {
                        console.error('Error fetching or parsing RSS feed:', error);
                    }
                }
                setRssFeeds(feeds);
            } catch (error) {
                setError(error);
                console.error('Error fetching sources:', error);
            }
        };

        fetchSources();
    }, []);

    if (error) {
        return <div className="text-red-500 text-center mt-4">Error: {error.message}</div>;
    }

    if (Object.keys(rssFeeds).length === 0) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-4 text-center">RSS Feeds</h1>
                        {Object.keys(rssFeeds).map((sourceName) => (
                            <section key={sourceName} className="mb-8">
                                <h2 className=" text-blue-800 font-bold mb-2 text-2xl">{sourceName}</h2>
                                <div className=" overflow-auto grid grid-cols-3 grid-rows-1 p-4  h-96 gap-5 ">
                                    {rssFeeds[sourceName].map((item, index) => (
                                        <RssFeedCard key={index} item={item} />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
