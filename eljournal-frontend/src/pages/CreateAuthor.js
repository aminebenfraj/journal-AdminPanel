import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../utils/constant';

export default function CreateAuthor() {
    const navigate = useNavigate();
    const [authorForm, setAuthorForm] = useState({ bio: '', name: '' });


    const handleChange = (e) => {
        setAuthorForm({ ...authorForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!authorForm.name || !authorForm.bio) {
            console.error("Please fill in the name and bio field.");
            return; // Prevent further execution if fields are missing
        }

        axios.post(`${baseURL}/authors`, { ...authorForm })
            .then((res) => {
                navigate('/'); // Navigate to home or any other route after successful submission
            })
            .catch((error) => {
                console.error("Error adding author:", error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={authorForm.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id="bio" name="bio" value={authorForm.bio} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
