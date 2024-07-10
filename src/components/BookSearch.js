import React from 'react';

const BookSearch = ({ searchTerm, setSearchTerm, categories, categoryFilter, setCategoryFilter }) => {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategoryFilter(event.target.value);
  };

  return (
    <div className='search'>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleChange}
      />
      <select value={categoryFilter} onChange={handleCategoryChange}>
        <option value="All">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default BookSearch;
