import * as React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
const axios = require('axios')

const getGreeting = async () => {
  try {
    const data = await axios.get('http://localhost:8080/greeting')
   
    return data.data[0].message
  } catch (err) {
    console.log("There was an err:", err)
  }
}

  function App() {
    const [message, setMessage] = useState();


    useEffect(() => {
     const helper = async () => {
        const data = await getGreeting();

        setMessage(data);
      }
      helper()
    }, [message, setMessage])

    return (
      <div className="App">{message}</div>
    );
  }
export default App;
