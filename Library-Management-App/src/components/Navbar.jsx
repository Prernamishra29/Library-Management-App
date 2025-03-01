import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../redux/actions/authActions';
import "../styles/global.css";

const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return(
        <nav>
            <h2>My Library</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/my-books">My Books</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};
export default Navbar;
