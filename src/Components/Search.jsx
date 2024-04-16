import React from 'react'
import { BsSearch } from "react-icons/bs";
import "./Header/header.css"


const Search = () => {
  return (
    <div className='header-search'>
      <input type='text' className='header-searchInput'/>
      <BsSearch className='header-searchIcon'/>
    </div>
  )
}

export default Search