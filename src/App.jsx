import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from '../src/components/api/api';
import { Searchbar } from './components/search/searchbar'
import Pokedex from './components/pokedex/pokedex'
import Logo from './components/logo/logo';
import Footer from './components/footer/footer';


import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);




  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (err) {
      console.log('no se pudo cargar');
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);


  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <>
    <div className="App">
    <Logo />
        <Searchbar onSearch={onSearch} />
        {notFound ? (<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>)
        :  (
            <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
            />
          )}
    <Footer />
    </div>
    </>
  )
}

export default App
