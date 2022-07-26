import React, { useState } from 'react';
import axios from "axios";
import TableData from './TableData';
import Button from 'react-bootstrap/Button';

const Home = () => {
  var [data, setData] = useState(null);
  var [error, setError] = useState(false);
  async function getData() {
    try {
      // let response = (await axios.post('http://localhost:8080/user/get-details')).data;
      let response = (await axios.post('https://team-user-list.herokuapp.com/user/get-details')).data;
      // console.log(response);
      setData(response)

    } catch (error) {
      console.log(`Error getting details: ${error}`);
      setError(true);
    }

  }

  return (
    <main className='Home'>
      <Button variant="info" onClick={getData}>Get Users</Button>
      {error ? 'Error fetching records. Please try again later'
        :
        data ?
          <TableData data={data} />
          :
          <span> &larr; Click Me To Get Team-User Table</span>
      }
    </main>
  )
}

export default Home;
