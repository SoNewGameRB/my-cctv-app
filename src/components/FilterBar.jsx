// FilterBar.jsx
import React, { useState } from 'react';

const FilterBar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
    onFilter(category);
  };

  return (
    <div className="flex justify-center space-x-4 mb-6">
      <input
  type="text"
  className="border p-2 rounded w-full md:w-1/3 sm:w-2/3 sm:p-1 md:p-2"
  placeholder="搜索商品..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        搜尋
      </button>
      <select
        value={filterCategory}
        onChange={(e) => handleFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="all">所有類別</option>
        <option value="nightvision">夜視攝像頭</option>
        <option value="analysis">智能分析</option>
        <option value="remote">遠端監控</option>
      </select>
    </div>
  );
};

export default FilterBar;
