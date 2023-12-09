import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
function UpdateBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }
    const updateBook = async () => {
        try {
            const res = await fetch(`http://localhost:3000/updatebook/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, author }),
                headers: { 'Content-Type': 'application/json' },
            });
            const result = await res.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateBook();
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
            <button type="submit" >Update book</button>
        </form>
    )
}
export default UpdateBook;