import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function BookAdd({ onSubmit }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ title, author });
        setTitle('');
        setAuthor('');
        navigate("/showbooks");

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input onChange={handleTitleChange} value={title} type="text"></input>

            <label>Author</label>
            <input onChange={handleAuthorChange} value={author} type="text"></input>
        <button type="submit" >Add a book</button>
        </form>
    );
}

export default BookAdd;