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
      <section className="grid-container" >
        {filterDevices && filterDevices.map((device: IDevice, idx: number) => {
          return (
            <div className="card" onClick={() => navigateDevice(device.shortnames[0])} key={idx} >
              <div className="card__img-wrapper">
                <img className="card__img" src={getProductIcon(device.icon.id, 129)} alt={device.line.name} />
              </div>
              <div className="card__info">
                <h3 className="card__title">{device.product.name}</h3>
                <p className="card__desc">{device.line.name}</p>
              </div>
              <h3 className="card__counter" >{`${filterDevices.length} devices`}</h3>
            </div>
          )
        }
        )}

      </section>
    </>
  )
}

export default Grid