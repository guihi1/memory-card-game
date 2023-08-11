import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/110/').
        then(function(response) {
          return response.json();
        }).
        then(function(response) {
          console.log(response);
        })
      return response;
    }
    fetchData();
  }, [])

  return (
    <div></div>
  )
}

export default App
