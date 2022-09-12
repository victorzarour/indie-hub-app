import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Home from './components/Home';
import FilmList from './components/FilmList';
import UserForm from './components/UserForm';
import FilmDetails from './components/FilmDetails'
import Nav from "./components/Nav";


function App() {
  const [films, setFilms] = useState([])
  const [search, setSearch] = useState("") 

  function handleSearch(e){
    setSearch(e.target.value)
}

  useEffect(() => {
    fetch('/films')
    .then(res => res.json())
    .then(films => setFilms(films))
  }, [])

  
  const allFilms = films.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
      <Nav handleSearch={handleSearch} search={search}/>
       <Switch>
          <Route exact path="/">
            <Home films={allFilms}/>
          </Route>
          <Route exact path="/films">
            <FilmList films={allFilms}/>
          </Route>
          <Route exact path="/user/new">
            <UserForm />
          </Route>
          <Route path="/films/:id">
            <FilmDetails />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
