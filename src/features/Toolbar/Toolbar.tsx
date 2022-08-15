import React from 'react';
import Filters from './Filter/Filter';
import SearchBar from './SearchBar/SearchBar';
import './Toolbar.scss';

const Toolbar = () => {
  return (
    <section className="toolbar">
      <SearchBar />
      <Filters />
    </section>
  )
}

export default Toolbar