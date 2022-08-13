import React, { useState, useEffect, useRef } from 'react';
import './Searchbar.scss';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { filterDevices, resetDevice } from '../../redux/devicesSlice';

const Toolbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [checkedCategories, setCheckedCategories] = useState<any>([]);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }



  const devices = useSelector((state: any) => state.devicesStore.devices)

  const uniqueDevices = (devices: any) => {
    const uniqueDevices: any[] = [];
    devices.map((device: any) => {
      if (!uniqueDevices.includes(device.line.name)) {
        uniqueDevices.push(device.line.name);
      }
    }
    )
    return uniqueDevices;
  }


  useEffect(() => {
    console.log("Dispatched useEffect")
    console.log(devices)
    const filterData = {
      searchTerm: searchTerm,
      checkedCategories: checkedCategories
    }

    dispatch(filterDevices(filterData))
  }, [searchTerm, checkedCategories])


  const handleReset = () => {
    dispatch(resetDevice());
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }



  const handleCategoryChange = (e: any) => {
    const { name, checked } = e.target;
    setCheckedCategories((prevState: any[]) => {
      if (checked) {
        return [...prevState, name];
      } else {
        return prevState.filter((category: any) => category !== name);
      }
    }

    );
  }

  console.log(checkedCategories);


  return (
    <>
      <section className="filter">
        {devices && uniqueDevices(devices).map((lineName: string) => (
          <section key={lineName}><input name={lineName} type="checkbox" onClick={(e) => handleCategoryChange(e)} /><span>{lineName}</span></section>
        ))}


      </section>
      <nav onClick={handleFocus} className="toolbar__nav">
        <span className="toolbar__search-icon"></span>
        <input ref={inputRef} onChange={e => setSearchTerm(e.currentTarget.value)} className="toolbar__search" type="text" placeholder="Search" />
        <span onClick={handleReset} className="toolbar__close-icon"></span>
      </nav>
    </>
  )
}

export default Toolbar