import React from 'react'
import { useParams } from 'react-router-dom';
// REDUX
import { useSelector } from "react-redux";
// UTILS
import { IDevice, IDeviceState } from '../../utils/types';
import { formatDeviceProperties, getProductIcon } from '../../utils/helpers';


const Device = () => {
  const { shortname } = useParams();
  const devices = useSelector((state: IDeviceState) => state.devicesStore.devices)
  const device = devices?.find((device: IDevice) => device.shortnames[0] === shortname);

  console.log(device)


  const deviceProps = formatDeviceProperties(device);

  return device ? (
    <main className="device-container">
      <div className="device-container__img-wrapper">
        <img className="device-container__img" src={getProductIcon(device?.icon.id, 129)} alt={device?.line.name} />
      </div>
      <table className="table" >
        <tbody>
          {deviceProps && deviceProps.map((property: any, idx: number) => (
            <tr key={idx}>
              <td>{property.title}</td>
              <td>{property.value}</td>
            </tr>
          )
          )}
        </tbody>
      </table>

    </main>
  ) : <p>Cannot find product</p>
}

export default Device