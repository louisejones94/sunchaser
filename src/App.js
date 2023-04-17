import './App.css';
import Home from './Home';
import Place from './Place';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />}>
          <Route path=":place" element={<Place />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
