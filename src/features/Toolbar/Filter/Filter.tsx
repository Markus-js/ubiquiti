import React, { useState, useEffect } from 'react';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { filterDevices, displayOption } from '../../../redux/devicesSlice';
// UTILS 
import { uniqueDevices, handleCategoryChange } from '../utils';
// STYLE
import './Filter.scss';
// ICONS
import Close from '../../../assets/close.svg';
import GridIcon from '../../../assets/grid-icon.svg';
import GridIconActive from '../../../assets/grid-icon-active.svg';
import ListIcon from '../../../assets/list-icon.svg';
import ListIconActive from '../../../assets/list-icon-active.svg';

const Filters = () => {
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const listView = useSelector((state: any) => state.devicesStore.listView)
  const devices = useSelector((state: any) => state.devicesStore.devices)

  const [active, setActive] = useState(false);
  const dispatch = useDispatch();



  useEffect(() => {
    console.log("Dispatched useEffect")
    dispatch(filterDevices({ checkedCategories }))
  }, [checkedCategories])




  return (
    <>
      <section className="filter__options">
        <span onClick={() => dispatch(displayOption(true))} className="filter__options__item ">
          <img src={!listView ? ListIcon : ListIconActive} alt="List view" />
        </span>
        <span onClick={() => dispatch(displayOption(false))} className="filter__options__item ">
          <img src={listView ? GridIcon : GridIconActive} alt="Grid view" />
        </span>
        <span onClick={() => setActive(true)} className="filter__options__item">Filter</span>
      </section>
      <section className={`${active ? "filter" : "hidden"}`}>
        <div className="filter__header">
          <h3>Filter</h3>
          <img onClick={() => setActive(false)} className="filter__close" src={Close} alt="close" />
        </div>
        {devices && uniqueDevices(devices).map((lineName: string) => (
          <span key={lineName}><input name={lineName} type="checkbox" onClick={(e) => handleCategoryChange(e, setCheckedCategories)} /><span>{lineName}</span></span>
        ))}
      </section>
    </>
  )
}

export default Filters;