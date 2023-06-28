import './App.css';
import MovieGalery from './MovieGalery';
import TvGalery from './TvGalery';
import Header from './header';
import Banner from './Banner';
import { Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';


function App() {

    const [search, setSearch] = useState('');

    const serachMovie = (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        setSearch(query)
        console.log(search)
    }

  return (
    <div>
      <Header handleClick={serachMovie}/>
      <Banner handleClick={serachMovie}/>
      <h4>Trending</h4>

      <Routes>
        <Route path="/" element={<MovieGalery query={search}/>} />
        <Route path="/TvGalery" element={<TvGalery query={search}/>} />
      </Routes>
    </div>
  );
}

export default App;
