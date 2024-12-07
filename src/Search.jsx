const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };
  const handleClick = () => {
    alert('I was clicked');
  };
  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input
        type='text'
        id='search'
        onChange={handleChange}
        onClick={handleClick}
        placeholder='Enter search term here'
      />
    </div>
  );
};
export default Search;
