//import { useContext } from "react";
//import MyContext from "../MyContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function BookShow() {
  //const { books } = useContext(MyContext);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getBooks() {
      try {
        const response = await fetch('http://localhost:3000/showbooks');
        const result = await response.json();
        setBooks(result);
      } catch (error) {
        console.error('Cannot fetch', error);
      }
    }
    getBooks();
  }, []);

  const handleUpdate = (id) => {
   navigate(`/updatebook/${id}`);
  }

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/deletebook/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = res.json();
      setBooks((books) => books.filter((book) => book.id !== id));
      console.log("deleted successfully");
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };
  return (
    <div>
      {books.length === 0 ? (
        <p>No books to display.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Id</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.title}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.id}</td>
                <td><button onClick={() => handleUpdate(book.id)}>Update</button></td>
                <td><button onClick={() => handleDelete(book.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookShow;

