import { useContext } from "react";
import  MyContext  from "../MyContext";
import { useNavigate } from "react-router-dom";

function BookShow() {
  const { books } = useContext(MyContext);
const navigate=useNavigate();
  const handleClick=()=>{
navigate("/addbooks");
  }
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
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.title}>
                <td>{book.title}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div>
        <button onClick={handleClick}>Back to Add a book</button>
      </div>
    </div>
  );
}

export default BookShow;

