import React from 'react'
import List from '../../features/List/List'
// REDUX
import { useSelector } from "react-redux";
// COMPONENTS
import Grid from '../../features/Grid/Grid';
// UTILS 
import { IDeviceState } from '../../utils/interfaces';
// STYLE
import './Home.scss';


const Home = () => {
  const listView = useSelector((state: IDeviceState) => state.devicesStore.listView)

  return (
    <main className="main-content">
      {listView
        ? <List />
        : <Grid />
      }
    </main>
  )
}

export default Home