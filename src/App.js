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
  // const [allSelected, setAllSelected] = useState(false);
  const [selectedIDs, setSelectedIDs] = useState([]);
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   setList(Catalogues);
  // }, [list]);

  // function handleSelectAll(e, list) {
  //   // Toggle allSelected from true <-> false
  //   setAllSelected(!allSelected);
  //   // Get the list of ids from the current list (forecasts or shortlist)
  //   setSelectedIDs(list.map((item) => item.id));
  //   if (allSelected) {
  //     setSelectedIDs([]);
  //   }
  // };

  function handleSelectClick(place) {
    console.log("Selected IDs is ", selectedIDs)
    console.log("Place clicked is ", place);
    let newIDs = [...selectedIDs];
    
    if (newIDs.some((item) => item.i === place.i)) {
      console.log("place is in selectedIDs so we'll remove it")
      newIDs = newIDs.filter((item) => item.i !== place.i)
      setSelectedIDs(newIDs);
    }
    else {
      console.log("place is not in selectedIDs so we'll add it")
      setSelectedIDs([...newIDs, place]);
    }
  };

  function addPlaceToShortlist(places) {
    let newShortlist = [...shortlist];
    
    places.forEach((place) => {
      if (newShortlist.some((item) => item.i === place.i)) {
        console.log("place is in shortlist already so we won't add it");
      }
      else {
        console.log("place is not in shortlist so we'll add it");
        newShortlist = [...newShortlist, place]
      } 
    })
    setShortlist(newShortlist)
  }

  function removePlaceFromShortlist(places) {
    let newShortlist = [...shortlist]
    places.forEach((place) => {
      newShortlist = newShortlist.filter((item) => item.i !== place.i);
    })
    setShortlist(newShortlist);
  }

  function clearSelectedIDs() {
    let newSelectedIDs = [];
    setSelectedIDs(newSelectedIDs);
  }


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search shortlist={shortlist} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} selectedIDs={selectedIDs} handleSelectClick={handleSelectClick} clearSelectedIDs={clearSelectedIDs} />} />
        <Route path="/shortlist" element={<Shortlist shortlist={shortlist} removePlaceFromShortlist={removePlaceFromShortlist} selectedIDs={selectedIDs} handleSelectClick={handleSelectClick} clearSelectedIDs={clearSelectedIDs} />} />
        <Route path="/place" element={<Place />}>
          <Route path=":place" element={<Place />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
