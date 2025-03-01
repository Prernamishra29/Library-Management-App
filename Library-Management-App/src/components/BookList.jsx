import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchBooks} from '../redux/actions/bookActions';
import BookCard from './BookCard';

const BookList = () => {
    const dispatch = useDispatch();
    const {books,loading}= useSelector(state => state.book);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);
    return loading ? <p>Loading...</p> : books.map(book=> <BookCard kry ={book.id} book={book} />);
};
export default BookList;