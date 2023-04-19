import './css/App.css';
import Home from './routes/Home';
import Search from './routes/Search';
import Shortlist from './routes/Shortlist';
import Place from './routes/Place';
import NavBar from './components/NavBar';
import PageNotFound from './routes/PageNotFound';
import { Routes, Route } from "react-router-dom";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [shortlist, setShortlist] = useState([]);

  function addPlaceToShortlist(place) {
    let newShortlist = [...shortlist, place];
    setShortlist(newShortlist);
  }

  function removePlaceFromShortlist(place) {
    let newShortlist = [...shortlist].filter((item) => item !== place);
    setShortlist(newShortlist);
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search shortlist={shortlist} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} />} />
        <Route path="/shortlist" element={<Shortlist shortlist={shortlist} removePlaceFromShortlist={removePlaceFromShortlist}/>} />
        <Route path="/place" element={<Place />}>
          <Route path=":place" element={<Place />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
