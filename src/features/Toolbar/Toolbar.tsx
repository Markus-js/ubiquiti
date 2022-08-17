import React from 'react';
import { useLocation } from 'react-router-dom';
// COMPONENTS
import Filters from './Filter/Filter';
import SearchBar from './SearchBar/SearchBar';
import DevicePageToolbar from './DevicePageToolbar/DevicePageToolbar';
// STYLE
import './Toolbar.scss';

const Toolbar = () => {
  const location = useLocation();
  const isDevicePage = location.pathname.includes('device');

  return (
    <section className={`toolbar ${isDevicePage ? "device-page" : "home-page"}`}>
      {isDevicePage
        ?
        <DevicePageToolbar />
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