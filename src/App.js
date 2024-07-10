import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';
import BorrowHistory from './components/BorrowHistory';
import booksData from './data/books.json';
import Footer from './components/Footer';

function App() {
  const [books, setBooks] = useState(booksData);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Extracting all unique categories for filtering
  const categories = ['All', ...new Set(books.map(book => book.category))];

  return (
    <div className="App">
      <header className="App-header">
      
      <Home/>
      
      <h1>Book Library</h1>
        <BookSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <BookList books={books} searchTerm={searchTerm} categoryFilter={categoryFilter} />

        {/* Example of passing borrow history 
        <BorrowHistory borrowHistory={books.borrowHistory} />
        */}

        <Footer/>
      </header>
    </div>
  );
}

export default App;
