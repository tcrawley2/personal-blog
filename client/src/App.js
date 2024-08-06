import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'

function App() {
  // const[backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then (
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  return (
    <Navbar />
  )
}

export default App