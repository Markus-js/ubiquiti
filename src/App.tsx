import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { setDevices } from './redux/devicesSlice';
// COMPONENTS
import NavBar from './features/Header/Header';
import Toolbar from './features/Toolbar/Toolbar';
// PAGES
import Home from './pages/Home/';
import Device from './pages/Device';
// UTILS
import { getDevices } from './utils/getDevices';
import { IDevice, IDeviceState } from './utils/types';



function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    getDevices().then((data: IDevice) => {
      dispatch(setDevices(data));
    })
    console.log('RENDER!!')
  }, []);

  // console.log(devices)

  return (
    <>
      <Router>
        <NavBar />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/device/:name" element={<Device />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
