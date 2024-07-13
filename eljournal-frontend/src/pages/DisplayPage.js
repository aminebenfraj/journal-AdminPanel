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
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');

            if (xmlDoc.getElementsByTagName('parsererror').length) {
                throw new Error('Error parsing XML');
            }

            setRssFeed(xmlDoc);
            console.log(xmlDoc);
        } catch (e) {
            setError(e);
            console.error('Error parsing XML:', e);
        }
    };

    if (error) {
        return <div className="text-red-500 text-center mt-4">Error: {error.message}</div>;
    }

    if (!rssFeed) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    const items = rssFeed.querySelectorAll('item, entry');

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">RSS Feed</h1>
            <ul className="space-y-6">
                {Array.from(items).map((item, index) => {
                    const title = item.querySelector('title')?.textContent || 'No title';
                    const description = item.querySelector('description, summary')?.textContent || 'No description';
                    let link = item.querySelector('link')?.textContent;

                    if (!link) {
                        const linkElement = item.querySelector('link');
                        if (linkElement) {
                            link = linkElement.getAttribute('href');
                        }
                    }

                    if (!link) {
                        link = '#';
                    }

                    return (
                        <li key={index} className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition">
                            <h2 className="text-xl font-bold mb-2">{title}</h2>
                            <p className="text-gray-700 mb-4">{description}</p>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Read more
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DisplayPage;
