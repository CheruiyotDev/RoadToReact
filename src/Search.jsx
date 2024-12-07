import * as React from 'react';
const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input
        type='text'
        id='search'
        onChange={handleChange}
        placeholder='Enter search term here'
      />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};
export default Search;
