import React from 'react'
import List from '../../features/List/List'
// REDUX
import { useSelector } from "react-redux";
import Grid from '../../features/Grid/Grid';


const Home = () => {
  const displayOption = useSelector((state: any) => state.devicesStore.displayOption)

  return (
    <section>
      {displayOption
        ? <List />
        : <Grid />
      }
    </section>
  )
}

export default Home