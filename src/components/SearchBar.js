import React from 'react'
//import Button from '@mui/material/Button'
import Button from 'react-bootstrap/Button';


function SearchBar({ onSearch }) {

  function handleSubmit(e) {
    e.preventDefault();
    const searchRequest = e.target.querySelector('input[type="text"]')
      .value;
    const location = e.target.querySelector('input[type="location"]').value;

    onSearch(searchRequest, location);
  }
  return (
    <div className='search-form'>
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search restaurant" className='search-item'/>
      <input type="text" placeholder="Location" className='search-item' />
      <Button type="submit" className='search-button'>Search</Button>
    </form>
    </div>

  )
}

export default SearchBar;
