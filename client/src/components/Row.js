import React, { useState, useEffect } from 'react'
import './Row.css'
import YouTube from 'react-youtube'

function Row ({ title, films }) {

    const [trailerUrl, setTrailerUrl] = useState("")

    const opts = {
        height: '600',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };


    function handleClick(film){
        const trailerId = film.trailer.slice(32, 43)
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            setTrailerUrl(trailerId)
            }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {films.map(film => (
                    <img
                        key={film.id}
                        onClick={() => handleClick(film)}
                        className="row__posterLarge"
                        src={film.image_url}
                        alt={film.title} />
                        
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;