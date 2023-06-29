import './App.css';
import MovieGalery from './MovieGalery';
import TvGalery from './TvGalery';
import Header from './header';
import Banner from './Banner';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Filter from './Filter';

const moviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=8d97210e6edd66eb9e967278325836d0"
const tvUrl = "https://api.themoviedb.org/3/tv/popular?api_key=8d97210e6edd66eb9e967278325836d0"

function App() {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState()
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  useEffect(() => {
    fetch(tvUrl)
      .then((res) => res.json())
      .then(data => {
        setTv(data.results)
        console.log(data)
      })
  }, [])


  useEffect(() => {
      fetch(moviesUrl)
          .then((res) => res.json())
          .then(data => {
              setMovies(data.results)
              console.log(data)
          })
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8d97210e6edd66eb9e967278325836d0&with_genres=${filter}`)
        .then((res) => res.json())
        .then(data => {
            setMovies(data.results)
        })
}, [filter])

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/discover/tv?api_key=8d97210e6edd66eb9e967278325836d0&with_genres=${filter}`)
      .then((res) => res.json())
      .then(data => {
          setTv(data.results)
      })
}, [filter])


  const serachMovie = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    setSearch(query)

  }

  const filterMovie = (e) => {
    const query = e.target.value;
    setFilter(query)
    console.log(filter)
  }

  return (
    <div>
      <Header handleClick={serachMovie} />
      <Banner handleClick={serachMovie} />
      <div className='container-fluid'>
        <h4>Trending</h4>
        <Filter filterMovie={filterMovie} filter={filter}/>
      </div>
      <Routes>
        <Route path="/" element={<MovieGalery query={search} movies={movies}/>} />
        <Route path="/TvGalery" element={<TvGalery query={search} tv={tv}/>} />
      </Routes>
    </div>
  );
}

export default App;
