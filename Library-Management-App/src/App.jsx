import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import MyBooks from './pages/MyBooksPage';
import "./styles/global.css";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <Router>
    <Navbar />
    <div className="container mx auto px-4">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Login />} />
    <Route path="/my-books" element={user ? <MyBooks /> : <Login />} />

    </Routes>
    </div>
    </Router>
  );
}
export default App;