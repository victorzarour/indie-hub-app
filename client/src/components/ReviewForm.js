import './FilmDetails.css'

function ReviewForm( {handleChange, handleSubmit, formData} ) {
    return (
      <div className='reviewSubmitForm'>
        <form onSubmit={handleSubmit}>
          <h2>Feel free to add your own review. Make sure you register first, though!</h2>

          <div> 
            <input className='input' type="text" id="name" placeholder="Reviewer..." name="name" value={formData.name} onChange={handleChange}/>
          </div>

          <div> 
            <textarea className='textarea' id="review_body" name="review_body" placeholder="Write something.." value={formData.review_body} onChange={handleChange} style={{height:200}}></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default ReviewForm;