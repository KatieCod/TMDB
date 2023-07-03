import './App.css';
import MovieGalery from './MovieGalery';
import TvGalery from './TvGalery';
import Header from './header';
import Banner from './Banner';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Loader from './loader';

const moviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=8d97210e6edd66eb9e967278325836d0"
const tvUrl = "https://api.themoviedb.org/3/tv/popular?api_key=8d97210e6edd66eb9e967278325836d0"

function App() {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState()
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  const movieGanreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=8d97210e6edd66eb9e967278325836d0&with_genres=${filter}`
  const tvGanreUrl = `https://api.themoviedb.org/3/discover/tv?api_key=8d97210e6edd66eb9e967278325836d0&with_genres=${filter}`

  async function getMovies(url) {
    try {
      let response = await fetch(url)
      let decode = await response.json()
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMovies(decode.results)
    } catch (err) {
      console.log('error is ' + err)
    }
  }

  async function getTv(url) {
    try {
      let response = await fetch(url)
      let decode = await response.json()
      await new Promise(resolve => setTimeout(resolve, 100))
      setTv(decode.results)
    } catch (err) {
      console.log('error is ' + err)
    }
  }

  useEffect(() => {
    getTv(tvUrl)
  }, [])


  useEffect(() => {
    getMovies(moviesUrl)
  }, [])

  useEffect(() => {
    getMovies(movieGanreUrl)
    getTv(tvGanreUrl)
  }, [filter])

  const serachMovie = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    setSearch(query)

  }

  const filterMovie = (e) => {
    const query = e.target.value;
    setFilter(query)
  }

  return ! movies.length ? <Loader/> : (
    <div>
      <Header handleClick={serachMovie} />
      <Banner handleClick={serachMovie} />
      <div className='container-fluid'>
        <h4>Trending</h4>
        <Filter filterMovie={filterMovie} filter={filter} />
      </div>
      <Routes>
        <Route path="/" element={<MovieGalery query={search} movies={movies} />} />
        <Route path="/TvGalery" element={<TvGalery query={search} tv={tv} />} />
      </Routes>
    </div>
  );
}

export default App;
