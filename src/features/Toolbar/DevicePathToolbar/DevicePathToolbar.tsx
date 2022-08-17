import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
// REDUX
import { useSelector } from "react-redux";
// UTILS
import { IDevice, IDeviceState } from '../../../utils/interfaces';
// ICONS
import BackIcon from '../../../assets/back-icon.svg';

const DevicePathToolbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [shortname] = (location.pathname.match(/([^/]*)$/) || []);

  let device;
  if (shortname) {
    const devices = useSelector((state: IDeviceState) => state.devicesStore.devices)
    device = devices?.find((device: IDevice) => device.shortnames[0] === shortname);
  }

  return (
    <>
      <img onClick={() => navigate('/')} src={BackIcon} alt="Back" />
      <p>{device && device.line.name}</p>
    </>
  )
}

export default DevicePathToolbar