import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [counter, setCounter] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchData = async (i) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const data = await response.json();
      if (!ignore) {
        setPokemonList((prevList) => ([...prevList, { name: data.name, image: data.sprites.other["official-artwork"].front_default, hit: false }]));
      }
    }

    for (let i = 110; i < 118; i += 1) {
      fetchData(i);
    }

    return () => {
      ignore = true;
    };
  }, []);

  function reset() {
    let resetList = [...pokemonList].map(value => value.hit = false);
    setPokemonList(resetList);
  }

  function handleCounter() {
    setCounter(counter + 1);
  }

  function shuffle() {
    let shuffledList = [...pokemonList]
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setPokemonList(shuffledList);
  }

  function handleClick(name) {
    let flag = false;
    let afterHit = [...pokemonList].map((value) => {
      if (value.name === name && !value.hit) {
        value.hit = true;
      } else if (value.name === name && value.hit) {
        flag = true;
      }
    })
    if (!flag) {
      setPokemonList(afterHit);
      handleCounter();
    } else if (flag) {
      reset();
      setCounter(0);
    }
    shuffle();
  }

  return (
    <div id="page">
      <p>{counter}</p>
      <div className="card-grid">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} image={pokemon.image} handleClick={handleClick} />
        ))}
      </div>
    </div>
  )
}

export default App
