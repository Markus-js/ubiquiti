import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.scss';
// REDUX
import { useDispatch } from "react-redux";
import { filterDevices, resetDevice } from '../../../redux/devicesSlice';
// UTILS 

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  const handleReset = () => {
    dispatch(resetDevice());
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }


  useEffect(() => {
    console.log("Dispatched useEffect")
    dispatch(filterDevices({ searchTerm }))
  }, [searchTerm])


  return (
    <>
      <nav onClick={handleFocus} className="toolbar__nav">
        <span className="toolbar__search-icon"></span>
        <input ref={inputRef} onChange={e => setSearchTerm(e.currentTarget.value)} className="toolbar__search" type="text" placeholder="Search" />
        <span onClick={handleReset} className="toolbar__close-icon"></span>
      </nav>
    </>
  )
}

export default SearchBar;