import React from 'react'
import List from '../../features/List/List'
// REDUX
import { useSelector } from "react-redux";
import Grid from '../../features/Grid/Grid';
// STYLE
import './Home.scss';


const Home = () => {
  const displayOption = useSelector((state: any) => state.devicesStore.displayOption)

  return (
    <main className="main-content">
      {displayOption
        ? <List />
        : <Grid />
      }
    </main>
  )
}

export default Home