import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './FilmDetails.css'
import YouTube from 'react-youtube'

import ReviewForm from "./ReviewForm";
import Review from "./Review"

function FilmDetails() {

const [film, setFilm] = useState([])
const [show, setShow] = useState(true)
const [formData, setFormData] = useState({
  name: "",
  review_body: ""
})
const [reviews, setReviews] = useState([])

function handleChange(e){
  const { name, value } = e.target
  setFormData({...formData, [name]: value})
}

function handleSubmit(e){
  e.preventDefault();

  fetch(`/films/${id}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
   .then((resp) => resp.json())
   .then(newReview => setReviews([...reviews, newReview]))
   .catch(error => setShow(!show))
  
  
  setFormData({
    name: "",
    review_body: ""
  });
}

function handleDeleteReview(id) {
  const deleteReview = reviews.filter((review) => review.id !== id)
  setReviews(deleteReview) 
  fetch(`/reviews/${id}`, {
      method:'DELETE'
    })
}

function onUpdateReview(updatedReview) {
  const updatedReviews = reviews.map(review => {
    if(review.id === updatedReview.id) {
      return updatedReview
    } else {
      return review
    }
  }); 
  setReviews(updatedReviews)
}

const { id } = useParams();
const [isLoaded, setIsLoaded] = useState(false)
//get requests
useEffect(() => {
  fetch(`/films/${id}`)
  .then((r) => r.json())
  .then(film => {
    setFilm(film);
    setIsLoaded(true)
})
}, [id])

useEffect(() => {
  fetch(`/films/${id}/reviews`)
  .then((r) => r.json())
  .then((reviews) => setReviews(reviews))
}, [id])

if (!isLoaded) return <h2>Loading...</h2>

const { title, year, runtime, rotten_tomatoes_score, director, starring, synopsis, critics_consensus, image_url, trailer, genre } = film

let rottenLogo = rotten_tomatoes_score > 50 ? "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/31/1501854760-certified-fresh.png" : "https://www.pngkey.com/png/full/94-948135_open-rotten-tomatoes-green-png.png"

const opts = {
  height: '500',
  width: '40%',
  playerVars: {
      // https://developers.google.com/youtube/player_parameters
  },
};


    return (
      
      <div className="filmDetailsDiv">

        <div className="trailer">
          <YouTube videoId={trailer.slice(32, 43)} opts={opts}/>
        </div>

        <div className="basicInfo">
          <h1>{title}</h1>
          <p>{year}, {genre}, {runtime}m</p> 
          <img className="rottenTomatoLogo" src={rottenLogo} alt="rottenTomatoLogo"/>
          <p className="score">{rotten_tomatoes_score}%</p>
        </div>

        <div className="additionalInfo">
          <p><span style={{fontWeight: 'bold'}}>Director</span>: {director}</p>
          <p><span style={{fontWeight: 'bold'}}>Starring</span>: {starring}</p>
          <p><span style={{fontWeight: 'bold'}}>Critics Consensus</span>: {critics_consensus}</p>
          <p><span style={{fontWeight: 'bold'}}>Synopsis</span>: {synopsis}</p>         
        </div>

        <div className="reviews">
          <h2>User Reviews</h2>
          {reviews.map(review => <Review key={review.id} review={review} handleDeleteReview={handleDeleteReview} onUpdateReview={onUpdateReview} />)}
        </div>

        <div className={show ? "display" : "hide"}>
          <ReviewForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
        </div>

        <div className={!show ? "errorSubmit" : "hide"}>
          <p>Please enter a valid username.</p>
          <button onClick={() =>setShow(!show)}>Try again.</button>
        </div>

      </div>
    );
  }
  
  export default FilmDetails;