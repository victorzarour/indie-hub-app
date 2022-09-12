function FilmForm({ onAddFilm }) {
  const initialState = {
    title: "",
    year: "",
    runtime: "",
    rottenTomatoesScore: "",
    director: "",
    starring: "",
    synopsis: "",
    criticsConsensus: "",
    image: "",
    trailer: "",
    banner:
  }

  const [newFilmData, setNewFilmData] = useState(initialState)

    
  return (
    
     <section>
      <form>
        <h2>Add a New Film</h2>
          <label>Title:</label>
          <input
             type='text' required id='title' name='title' onChange={handleChange} value={newFilmData.title}
          />
          <label>Year:</label>
          <input
           type='text' required id='year' name='year' onChange={handleChange} value={newFilmData.year}
          />
          <label>Runtime:</label>
          <input
           type='text' required id='runtime' name='runtime' onChange={handleChange} value={newFilmData.runtime}
          />
          <label>Rotten Tomatoes Score:</label>
          <input
           type='text' required id='rotten' name='rottenTomatoesScore' onChange={handleChange} value={newFilmData.rottenTomatoesScore}
          />
          <label>Director:</label>
          <input
           type='text' required id='director' name='director' onChange={handleChange} value={newFilmData.director}
          />
          <label>Starring:</label>
          <input
           type='text' required id='starring' name='starring' onChange={handleChange} value={newFilmData.starring}
          />
          <label>Synopsis:</label>
          <textarea
           required id='synopsis' name='synopsis' onChange={handleChange} value={newFilmData.synopsis}
          />
          <label>Critic's Consensus:</label>
          <textarea
           required id='criticsConsensus' name='criticsConsensus' onChange={handleChange} value={newFilmData.criticsConsensus}
          />
          <label>Image:</label>
          <input
           type='text' required id='image' name='image' onChange={handleChange} value={newFilmData.image}
          />
          <label>Trailer:</label>
          <input
           type='text' required id='trailer' name='trailer' onChange={handleChange} value={newFilmData.trailer}
          />
          <button type="submit" className="filmbtn">Add</button>
      </form>
     </section>
    );
  }
  
  export default FilmForm;