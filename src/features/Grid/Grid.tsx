import React from 'react'
import { useNavigate } from 'react-router-dom';
// REDUX
import { useSelector } from "react-redux";
// UTILS
import { IDevice, IDeviceState } from '../../utils/types';
import { getProductIcon } from '../../utils/helpers';
// STYLE
import './Grid.scss'

const Grid = () => {
  const filterDevices = useSelector((state: IDeviceState) => state.devicesStore.filterDevices)

  const navigate = useNavigate();

  const navigateDevice = (shortname: string) => {
    navigate(`/device/${shortname}`);
  };

  return (
    <>
      <h3>{filterDevices.length}</h3>
      <section className="grid" >
        {filterDevices && filterDevices.map((device: IDevice, idx: number) => {
          return (
            <div onClick={() => navigateDevice(device.shortnames[0])} key={idx} className="card">
              <div className="card__img-wrapper">
                <img className="card__img" src={getProductIcon(device.icon.id, 129)} alt={device.line.name} />
              </div>
              <div className="card__description">
                <h3>{device.product.name}</h3>
                <p>{device.line.name}</p>
              </div>
            </div>
          )
        }
        )}

      </section>
    </>
  )
}

export default Grid