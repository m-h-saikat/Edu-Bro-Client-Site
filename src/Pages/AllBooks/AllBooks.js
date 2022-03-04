import React, { useEffect, useState } from 'react';
import BooksCart from './BooksCart';

const AllBooks = () => {
 
        const [books, setBooks] = useState([]);
        useEffect(() => {
            fetch('https://blooming-sierra-74368.herokuapp.com/allBooks')
                .then(res => res.json())
                .then(data => setBooks(data))
        }, [])
        console.log(books)
    return (
        <div className="container text-black mt-5 mb-5" >
        <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Desire Books</h1></div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {books?.map((book) => (
               
             <BooksCart 
             key={book.id}
             data={book}>

             </BooksCart>

            ))}
        </div>

    </div>
    );
};

export default AllBooks;