import { useEffect, useState } from 'react'
import './FilmDetails.css'

function Review( {review, handleDeleteReview, onUpdateReview} ) {
  const { review_body, user_id, created_at, user  } = review
  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(review_body)
  // const [user, setUser] = useState("")
  
  function handleShow() {
    setShow(!show)
  }

  function handleChange(e) {
    setEdit(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({review_body:edit}),
    })
    .then(res => res.json())
    .then(updatedReview => onUpdateReview(updatedReview))
    setEdit(review_body)
    setShow(!show)
  }

  // useEffect(() => {
  //   fetch(`/users/${user_id}`)
  //   .then(res => res.json())
  //   .then(user => setUser(user))
  // }, [user_id])


  const date = created_at.slice(0, 10)

    return (
      <div className='individualReviews'>
        <div className={show ? "hide" : "display"}>
          <p>{date}, by {user.name}</p>
          <p className='reviewBody'>{review_body}</p>
          <button onClick={handleShow}>Edit</button>
          <button className="delete-btn" onClick={() =>handleDeleteReview(review.id)}>Delete</button>
        </div>
        <form className={show ? "display" : "hide"} onSubmit={handleSubmit}>
          <textarea className="editInput" type='text' required id='name' name='name' onChange={handleChange} value={edit}/>
          <button type='submit'>Done</button>
        </form>
      </div>
    );
  }
  
  export default Review;