import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function BookAdd({ onSubmit }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [data, setData] = useState({});
    async function bookAdd() {
        const res = await fetch('http://localhost:3000/addbooks', {
            method: "POST",
            body: JSON.stringify({ title, author }),
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await res.json();
        setData(result);
        console.log(result);
    }


    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        onSubmit({ title, author });
        bookAdd();
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