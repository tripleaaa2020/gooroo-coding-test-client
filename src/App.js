import React, { useState, useRef, useEffect } from 'react';
// import logo from './logo.svg';
import {getAllBooks} from './services/Books';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const ref = useRef();
  useEffect(() => {
    getAllBooks().then(data => {
      console.log("SUCCESSFUL =>", data);
    })
  },[])
  return (
    <div className="App">
      {
        books.map(book => {
          return (
            <div key={book.book_id}>
              <div>{book.title}</div>
              <div>{book.author}</div>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
