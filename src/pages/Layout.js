import { Link } from "react-router-dom";
function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/showbooks'>Show Books</Link>
                    </li>
                    <li>
                        <Link to='/addbooks'>Add a Book</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Layout;