// src/components/RssFeedCard.js

import React from 'react';
import { FaRss } from 'react-icons/fa';

const RssFeedCard = ({ item }) => {
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
        <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition col-span-1">
            <div className="flex items-center">
                <FaRss className="text-3xl text-yellow-500 mr-4" />
                <div>
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
                </div>
            </div>
        </div>
    );
};

export default RssFeedCard;
