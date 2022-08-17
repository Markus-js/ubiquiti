import React from 'react'
import { useParams } from 'react-router-dom';
// REDUX
import { useSelector } from "react-redux";
// UTILS
import { IDevice, IDeviceState, IProperty } from '../../utils/types';
import { formatDeviceProperties, getProductIcon } from '../../utils/helpers';
// STYLE
import './Device.scss'

const Device = () => {
  const { shortname } = useParams();
  const devices = useSelector((state: IDeviceState) => state.devicesStore.devices)
  const device = devices?.find((device: IDevice) => device.shortnames[0] === shortname);

  const deviceProps = formatDeviceProperties(device);

  return device ? (
    <main className="device-container">
      <section className="device">
        <img className="device__img" src={getProductIcon(device?.icon.id, 129)} alt={device?.line.name} />

        <table className="table" >
          <tbody>
            {deviceProps && deviceProps.map((property: IProperty, idx: number) => (
              <tr className="table__row" key={idx}>
                <td className="table__data">{property.title}</td>
                <td className="table__data table__data--align-right">{property.value}</td>
              </tr>
            )
            )}
          </tbody>
        </table>
      </section>

    </main>
  ) : <p>Cannot find product</p>
}

export default Device