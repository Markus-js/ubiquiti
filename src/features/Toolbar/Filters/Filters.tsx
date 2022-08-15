import React, { useState, useEffect } from 'react';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { filterDevices } from '../../../redux/devicesSlice';
// UTILS 
import { uniqueDevices, handleCategoryChange } from '../utils';

const Filters = () => {
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const devices = useSelector((state: any) => state.devicesStore.devices)

  const dispatch = useDispatch();



  useEffect(() => {
    console.log("Dispatched useEffect")
    dispatch(filterDevices({ checkedCategories }))
  }, [checkedCategories])


  return (
    <>
      <section className="filter">
        {devices && uniqueDevices(devices).map((lineName: string) => (
          <section key={lineName}><input name={lineName} type="checkbox" onClick={(e) => handleCategoryChange(e, setCheckedCategories)} /><span>{lineName}</span></section>
        ))}
      </section>
    </>
  )
}

export default Filters;