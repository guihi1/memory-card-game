import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchData = async (i) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const data = await response.json();
      if (!ignore) {
        setPokemonList((prevList) => ([...prevList, data]));
      }
    }

    for (let i = 110; i < 118; i += 1) {
      fetchData(i);
    }

    return () => {
      ignore = true;
    };
  }, []);

  console.log(pokemonList);
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} image={pokemon.sprites.other["official-artwork"].front_default} />
      ))}
    </div>
  )
}

export default App
