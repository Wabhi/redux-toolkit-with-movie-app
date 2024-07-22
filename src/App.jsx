import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageNotFound from './components/page-not-found/PageNotFound';
import MovieDetails from './components/movies-details/MoviesDetails';
import Home from './components/home/Home';
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:imdbId' element={<MovieDetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
