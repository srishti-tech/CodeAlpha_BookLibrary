import React from 'react';
import './BorrowHistory.css'; // Import component-specific CSS

const BorrowHistory = ({ borrowHistory }) => {
  return (
    <div className="borrow-history-container">
      <h3>Borrow History</h3>
      <ul className="borrow-history-list">
        {borrowHistory.map((record, index) => (
          <li key={index} className="borrow-history-item">
            Borrower: {record.borrower}, Borrowed: {record.dateBorrowed}, Returned: {record.dateReturned}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowHistory;
