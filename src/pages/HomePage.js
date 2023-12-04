
import BookAdd from "./BookAdd";
import { useContext } from "react";
import  MyContext  from "../MyContext";

function HomePage() {

const {books,addBooks}=useContext(MyContext);


  return (
    <div >
      <BookAdd onSubmit={addBooks}></BookAdd>
    </div>
  );

}
export default HomePage;

