import { useState } from "react"

export default function SubmitFormData(){
  const [values, setValues]= useState({
    username:'',
    fullName:'',
    age:''
  })
  const [display, setDisplay] = useState(false)
  function handleForm(e){
    setValues({...values,[e.target.name]: e.target.value})
  }
  function handleSubmit(e){
   e.preventDefault();
   console.log(values)
   setValues({ username: '', fullName: '', age: '' })
   setDisplay(true)
  }
return(
  <>
  <form onSubmit={handleSubmit}>
  <label>Username</label><br/>
  <input name="username" type='text' value={values.username} placeholder="write your username" onChange={handleForm}/><br/>

  <label>Full Name</label><br/>
  <input name="fullName" type='text' value={values.fullName} placeholder="write your full name" onChange={handleForm}/><br/>

  <label>Age</label><br/>
  <input name="age" type='text' value={values.age} placeholder="write your age" onChange={handleForm}/><br/>
   
   <button type="submit">Submit</button>
  </form>
  {display && (
        <>
          <h4>Request Sent to DB with below request data</h4>
          <ul>
            <li>UserName: {values.username}</li>
            <li>FullName: {values.fullName}</li>
            <li>Age: {values.age}</li>
          </ul>
        </>
      )}
  </>
)
}