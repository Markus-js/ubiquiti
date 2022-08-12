import React from 'react'
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { setDevices } from '../../redux/devicesSlice';
// UTILS
import { IDevice, IDeviceState } from '../../utils/types';
import { getProductIcon } from '../../utils/getProductIcon';
// STYLE
import './TableList.scss'

const TableList = () => {
  const devices = useSelector((state: IDeviceState) => state.devicesStore.devices)

  console.log(devices)

  return (

    <table className="table" >
      <thead>
        <tr>
          <th>{`${devices.length}devices`}</th>
          <th>PRODUCT LINE</th>
          <th>NAME</th>
        </tr>
      </thead>
      <tbody>
        {devices.length > 0 && devices.map((device: IDevice, idx: number) => (

          <tr className="table__row" key={idx}>
            <td className="table__data">
              <img className="table__img" src={getProductIcon(device.icon.id, 25)} alt={device.line.name} />
            </td>
            <td className="table__data">{device.line.name}</td>
            <td className="table__data">{device.product.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableList