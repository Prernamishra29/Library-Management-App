import React from "react";
import "../styles/global.css";

const MyBooksPage = () => {
    return (
        <div>
            <h1>My Books</h1>
            <div className="card">
            <h3>Book Name: The Alchemist</h3>
            <p>Author: Paulo Coelho</p>
            <button>Read more</button>
            </div>
            </div>
    );
    };
export default MyBooksPage;