import React, { useState, useEffect } from 'react';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { filterDevices, displayOption } from '../../../redux/devicesSlice';
// UTILS 
import { uniqueDevices, handleCategoryChange } from '../utils';
import { IDevice, IDeviceState } from '../../../utils/types';
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
  const listView = useSelector((state: IDeviceState) => state.devicesStore.listView)
  const devices = useSelector((state: IDeviceState) => state.devicesStore.devices)

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
          <h3 className="filter__header--title" >Filter</h3>
          <img onClick={() => setActive(false)} className="filter__close" src={Close} alt="close" />
        </div>
        <div className='filter__boxes'>
          <h4 className="filter__title">Product Line</h4>
          {devices && uniqueDevices(devices).map((lineName: string) => (
            <label className="filter__item" key={lineName}>
              <input name={lineName} type="checkbox" onClick={(e) => handleCategoryChange(e, setCheckedCategories)} />
              {lineName}
            </label>
          ))}
        </div>
      </section>
    </>
  )
}

export default Filters;