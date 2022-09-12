import {useState} from 'react'
import './UserForm.css'

function UserForm() {
  const [name, setName] = useState("")
  const [response, setResponse] = useState(false)

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({name:name}),
  })
  setResponse(true)
  // setName("")
  }

    return (
     <section className='registerSection'>
      <div className='userDiv'>
        <form className={`${!response ? 'userform' : 'hidden'}`} autoComplete='off' onSubmit={handleSubmit}>
          <h2>REGISTER</h2>
            <p>If you'd like to submit a review, please register below, and make sure to remember your username.</p>
            <p>Please don't register more than once.</p>
            <input
              type='text' required id='name' name='name' onChange={handleChange} value={name} placeholder="USERNAME"
            />
            <button type="submit" className="user-form-btn">SUBMIT</button>
        </form>
      <div className={`${response ? 'userform' : 'hidden'}`}>
        <h2>THANK YOU FOR REGISTERING, {name}</h2>
        <p>Please use this username to post reviews.</p>
      </div>
      </div>
     </section>
     
    );
  }
  
  export default UserForm;