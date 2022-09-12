import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Banner.css'

function Banner() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('/films')
        .then(res => res.json())
        .then(films => {
            setFilms(films);
            setIsLoaded(true)
        })
      }, [])

      if (!isLoaded) return <h2>Loading...</h2>

      const randomFilm = films[Math.floor(Math.random() * films.length)]

      function truncate(str, n) {
          return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    return (
        <header className='banner'
             style={{
                backgroundSize: "cover",
                backgroundImage: `url("${randomFilm.banner}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner__contents'>
                <h1 className="banner__title">
                    {randomFilm.title}
                </h1>

                <div className="banner__buttons">
                    <NavLink exact to={`/films/${randomFilm.id}`}>
                        <button className="banner__btn">Explore</button>
                    </NavLink>
                </div>

                <h1 className="banner__description">
                    {truncate(randomFilm.synopsis, 200)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner