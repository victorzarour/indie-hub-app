import '../App.css';
import Row from "./Row";
import Banner from "./Banner";


function Home( { films } ) {

  const highestRated = films.filter(film => film.rotten_tomatoes_score > 90)

  const comedies = films.filter(film => film.genre.includes("comedy")).reverse()

  const drama = films.filter(film => film.genre.includes("drama"))

  const horror = films.filter(film => film.genre.includes("horror"))

  const thriller = films.filter(film => film.genre.includes("thriller"))

    return (
      <div className="App">
        <Banner />
        <Row title="Highest Rated" films={highestRated}/>
        <Row title="Horror" films={horror}/>
        <Row title="Drama" films={drama}/>
        <Row title="Comedies" films={comedies}/>
        <Row title="Thriller" films={thriller}/>
      </div>
    );
  }
  
  export default Home;