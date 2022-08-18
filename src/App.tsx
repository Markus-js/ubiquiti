import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// REDUX
import { useDispatch } from "react-redux";
import { setDevices } from './redux/devicesSlice';
// COMPONENTS
import Header from './features/Header/Header';
import Toolbar from './features/Toolbar/Toolbar';
// PAGES
import Home from './pages/Home/Home';
import Device from './pages/Device/Device';
// UTILS
import { getDevices } from './utils/helpers';
import { IDevice } from './utils/interfaces';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getDevices().then((data: IDevice) => {
      dispatch(setDevices(data));
    })
    console.log('RENDER!!')
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/device/:shortname" element={<Device />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
