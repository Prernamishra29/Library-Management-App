import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../redux/actions/authActions';

const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return(
        <nav>
            <h2>My Library</h2>
            <Link to="/">Home</Link>
            {auth.user ? (
                <>
                    <Link to="/my-books">My Books</Link>
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </>
            ) : (
                <Link to ="/login">Login/Register</Link>
            )}
        </nav>
    );
};
export default Navbar;
