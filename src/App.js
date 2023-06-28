import './App.css';
import MovieGalery from './MovieGalery';
import TvGalery from './TvGalery';
import Header from './header';
import Banner from './Banner';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <Banner />
      <h4>Trending</h4>

      <Routes>
        <Route path="/" element={<MovieGalery/>} />
        <Route path="/TvGalery" element={<TvGalery/>} />
      </Routes>
    </div>
  );
}

export default App;
