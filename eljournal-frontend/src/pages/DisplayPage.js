// src/pages/DisplayPage.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DisplayPage = () => {
    const [rssFeed, setRssFeed] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const url = query.get('url');
        const fileContent = query.get('file');
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

        if (url) {
            fetch(proxyUrl + url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => parseXML(data))
                .catch(error => {
                    setError(error);
                    console.error('Error fetching RSS feed:', error);
                });
        } else if (fileContent) {
            parseXML(fileContent);
        }
    }, [location.search]);

    const parseXML = (data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        setRssFeed(xmlDoc);
    };

    if (error) {
        return <div className="text-red-500 text-center mt-4">Error: {error.message}</div>;
    }

    if (!rssFeed) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    const items = rssFeed.querySelectorAll('item, entry'); // Handle both RSS and Atom formats

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">RSS Feed</h1>
            <ul className="space-y-4">
                {Array.from(items).map((item, index) => (
                    <li key={index} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold">{item.querySelector('title').textContent}</h2>
                        <p className="text-gray-700">{item.querySelector('description, summary').textContent}</p>
                        <a
                            href={item.querySelector('link').textContent || item.querySelector('link').getAttribute('href')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Read more
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayPage;
