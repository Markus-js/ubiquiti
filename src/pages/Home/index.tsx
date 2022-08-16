import React from 'react'
import List from '../../features/List/List'
// REDUX
import { useSelector } from "react-redux";
import Grid from '../../features/Grid/Grid';
// STYLE
import './Home.scss';


const Home = () => {
  const listView = useSelector((state: any) => state.devicesStore.listView)

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