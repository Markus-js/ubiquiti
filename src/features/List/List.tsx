import React from 'react'
import { useNavigate } from 'react-router-dom';

// REDUX
import { useSelector } from "react-redux";
// UTILS
import { IDevice, IDeviceState } from '../../utils/types';
import { getProductIcon } from '../../utils/helpers';
// STYLE
import './List.scss'

const List = () => {
  const devices = useSelector((state: IDeviceState) => state.devicesStore.devices)
  const filterDevices = useSelector((state: IDeviceState) => state.devicesStore.filterDevices)
  const displayOption = useSelector((state: any) => state.devicesStore.displayOption)

  const navigate = useNavigate();

  const navigateDevice = (shortname: string) => {
    navigate(`/device/${shortname}`);
  };

  return (

    <table className="table" >
      <thead className="table__head" >
        <tr>
          <th className="table__head table__head--count">{`${filterDevices.length}devices`}</th>
          <th className="table__head">PRODUCT LINE</th>
          <th className="table__head">NAME</th>
        </tr>
      </thead>
      <tbody>
        {filterDevices && filterDevices.map((device: IDevice, idx: number) => {
          return (
            <tr onClick={() => navigateDevice(device.shortnames[0])} className="table__row" key={idx}>
              <td className="table__data">
                <img className="table__img" src={getProductIcon(device.icon.id, 25)} alt={device.line.name} />
              </td>
              <td className="table__data">{device.line.name}</td>
              <td className="table__data">{device.product.name}</td>
            </tr>
          )
        }
        )}
      </tbody>
    </table>
  )
}

export default List