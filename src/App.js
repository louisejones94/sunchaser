import './css/App.css';
import Home from './routes/Home';
import Search from './routes/Search';
import Shortlist from './routes/Shortlist';
import Place from './routes/Place';
import NavBar from './components/NavBar';
import PageNotFound from './routes/PageNotFound';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shortlist" element={<Shortlist />} />
        <Route path="/place" element={<Place />}>
          <Route path=":place" element={<Place />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
