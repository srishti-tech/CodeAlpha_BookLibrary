import React from 'react';
import './BookList.css'; // Import component-specific CSS

const BookList = ({ books, searchTerm, categoryFilter }) => {
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'All' || book.category === categoryFilter)
  );

  return (
    <div className='ss'>
      <ul className='cardbox'>
        {filteredBooks.map(book => (
           
          <li key={book.id}>
           
            {book.borrowed ? <span className='borrowed-status' > - Borrowed</span> :
             <span className='available-status'> - Available</span>}
            <br/>
            <img src={book.image} className='img' />
            <br/>
            <strong>{book.title}</strong> by {book.author} 
            <br/>({book.category})
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
