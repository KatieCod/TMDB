import './App.css';
import MovieGalery from './MovieGalery';
import TvGalery from './TvGalery';
import Header from './header';
import Banner from './Banner';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Filter from './Filter';


function App() {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(0)

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
        <Route path="/" element={<MovieGalery query={search} filter={filter}/>} />
        <Route path="/TvGalery" element={<TvGalery query={search} filter={filter}/>} />
      </Routes>
    </div>
  );
}

export default App;
