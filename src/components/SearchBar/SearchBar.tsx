import React, { useState, useEffect, useRef } from 'react';
import './Searchbar.scss';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { filterDevices, resetDevice } from '../../redux/devicesSlice';

const Toolbar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (searchTerm: string) => {
    dispatch(filterDevices(searchTerm));
  }
  const devices = useSelector((state: any) => state.devicesStore.filterDevices)
  const handleReset = () => {
    dispatch(resetDevice());
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <nav onMouseOver={handleFocus} className="toolbar__nav">
      <span className="toolbar__search-icon"></span>
      <input ref={inputRef} onChange={e => handleSearch(e.currentTarget.value)} className="toolbar__search" type="text" placeholder="Search" />
      <span onClick={handleReset} className="toolbar__close-icon"></span>
    </nav>
  )
}

export default Toolbar