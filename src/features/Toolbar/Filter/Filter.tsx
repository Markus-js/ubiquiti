import React, { useState, useEffect } from 'react';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { filterDevices, toggleViewType, resetCheckedFilters } from '../../../redux/devicesSlice';
// UTILS 
import { uniqueDevices, handleFilterChange } from '../../../utils/helpers';
import { IDeviceState } from '../../../utils/interfaces';
// STYLE
import './Filter.scss';
// ICONS
import Close from '../../../assets/close-icon.svg';
import GridIcon from '../../../assets/grid-icon.svg';
import GridIconActive from '../../../assets/grid-icon-active.svg';
import ListIcon from '../../../assets/list-icon.svg';
import ListIconActive from '../../../assets/list-icon-active.svg';

const Filters = () => {
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const listView = useSelector((state: IDeviceState) => state.devicesStore.listView)
  const devices = useSelector((state: IDeviceState) => state.devicesStore.devices)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterDevices({ checkedFilters }))
  }, [checkedFilters])

  return (
    <>
      <section className="filter__options">

        <img
          onClick={() => dispatch(toggleViewType(true))}
          className="filter__options__item"
          src={!listView ? ListIcon : ListIconActive}
          alt="List view" />
        <img
          onClick={() => dispatch(toggleViewType(false))}
          className="filter__options__item"
          src={listView ? GridIcon : GridIconActive}
          alt="Grid view" />
        <div
          className={checkedFilters.length > 0 ? "reset-btn reset-btn--active" : "reset-btn"}>
          {checkedFilters.length > 0 &&
            <img onClick={() => dispatch(resetCheckedFilters())} className="reset-btn--icon" src={Close} alt="Reset" />
          }
          <span onClick={() => setOpen(true)} >
            Filter
          </span>
        </div>
      </section>
      <section className={`${open ? "filter" : "hidden"}`}>
        <div className="filter__header">
          <h3 className="filter__header--title" >Filter</h3>
          <img onClick={() => setOpen(false)}
            className="filter__close"
            src={Close}
            alt="close" />
        </div>
        <div className='filter__boxes'>
          <h4 className="filter__title">Product Line</h4>
          {devices && uniqueDevices(devices).map((lineName: string) => (
            <label className="filter__item" key={lineName}>
              <input
                onClick={(e) => handleFilterChange(e.target, setCheckedFilters)}
                name={lineName}
                type="checkbox"
              />
              {lineName}
            </label>
          ))}
        </div>
      </section>
    </>
  )
}

export default Filters;