import React from 'react';
import { useLocation } from 'react-router-dom';
// COMPONENTS
import Filters from './Filter/Filter';
import SearchBar from './SearchBar/SearchBar';
import DevicePathToolbar from './DevicePathToolbar/DevicePathToolbar';
// STYLE
import './Toolbar.scss';

const Toolbar = () => {
  const location = useLocation();
  const isDevicePath = location.pathname.includes('device');

  return (
    <section className={`toolbar ${isDevicePath ? "device-page" : "home-page"}`}>
      {isDevicePath
        ?
        <DevicePathToolbar />
        :
        <>
          <SearchBar />
          <Filters />
        </>
      }
    </section>
  )
}

export default Toolbar