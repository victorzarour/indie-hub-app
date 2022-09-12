import { NavLink } from "react-router-dom";
import './FilmList.css'

function FilmListItem({ film }) {

  const { id, title, year, runtime, rotten_tomatoes_score, director, starring, synopsis, critics_consensus, image_url, trailer, genre } = film

  let rottenLogo = rotten_tomatoes_score > 50 ? "https://911media.com/wp-content/uploads/2017/10/rotten-tomatoes-logo.png" : "https://www.pngkey.com/png/full/94-948135_open-rotten-tomatoes-green-png.png"

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

    return (
      <div className="film-li-info">
        
        <NavLink to={`/films/${id}`}>
          <img className="film-li-image" src={image_url} alt="filmPoster"/>
        </NavLink>

            <section className="film-li-heading">
            <NavLink to={`/films/${id}`}>
              <p className="headerLinks">{`${title} (${year})`}</p>
            </NavLink>
            </section>
          
            <section className="film-body-details">
              <p><b>Runtime:</b> {runtime}min.</p>
              <p><b>Director:</b> {director}</p>
              <p><b>Starring:</b> {starring}</p>
              <p><b>Synopsis:</b> {truncate(synopsis, 400)}</p>
              <p><b>Genre:</b> {genre}</p>
              <p><b>Tomatometer:</b> {rotten_tomatoes_score}%</p>
              
            </section>
          
      </div>
    );
  }
  
  export default FilmListItem;