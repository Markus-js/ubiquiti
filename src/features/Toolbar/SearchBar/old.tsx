import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.scss';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { filterDevices, resetDevice } from '../../../redux/devicesSlice';
// UTILS 
import { uniqueDevices, handleCategoryChange } from '../utils';

const SearchBar = () => {
  // const [searchTerm, setSearchTerm] = useState<string>('');
  // const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  // const devices = useSelector((state: any) => state.devicesStore.devices)

  // const dispatch = useDispatch();
  // const inputRef = useRef<HTMLInputElement>(null);

  // const handleFocus = () => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }
  // const handleReset = () => {
  //   dispatch(resetDevice());
  //   if (inputRef.current) {
  //     inputRef.current.value = '';
  //   }
  // }


  // useEffect(() => {
  //   console.log("Dispatched useEffect")
  //   const filterData = {
  //     searchTerm: searchTerm,
  //     checkedCategories: checkedCategories
  //   }
  //   // dispatch(filterDevices(filterData))
  // }, [searchTerm, checkedCategories])


  // return (
  //   <>
  //     <section className="filter">
  //       {devices && uniqueDevices(devices).map((lineName: string) => (
  //         <section key={lineName}><input name={lineName} type="checkbox" onClick={(e) => handleCategoryChange(e, setCheckedCategories)} /><span>{lineName}</span></section>
  //       ))}


  //     </section>
  //     <nav onClick={handleFocus} className="toolbar__nav">
  //       <span className="toolbar__search-icon"></span>
  //       <input ref={inputRef} onChange={e => setSearchTerm(e.currentTarget.value)} className="toolbar__search" type="text" placeholder="Search" />
  //       <span onClick={handleReset} className="toolbar__close-icon"></span>
  //     </nav>
  //   </>
  // )
  return null
}

export default SearchBar;