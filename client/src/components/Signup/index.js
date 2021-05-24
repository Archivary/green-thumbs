import React, { useState } from 'react';
import homePlant from "../../assets/homePlant.jpg";
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = event => {

    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    console.log(formState);
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section >
    <h2>Welcome!</h2>
    <h3>Your favorite website to browse local plants and learn about plant care.</h3>
    <div> 
      <img
          src={homePlant}
          alt={"home page plants"}
          className="img-thumbnail mx-1"/>
    </div>
          
      <div id="id01">
      
      <form onSubmit={handleFormSubmit}>
          
          <div className="container">
          <br></br>
          <br></br>  
          <label htmlFor="uname"><b>Username</b></label>
          <input type="username" placeholder="Enter Username" name="username"
                id="username" value={formState.username} onChange={handleChange}/>
          <br></br>
          <br></br>
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password"
                id="password" value={formState.password} onChange={handleChange}/>
          <br></br>
          <br></br>   
          <button type="submit" >Sign Up</button>
          <br></br>
          <br></br>  
          </div>
      </form>
      {error && <div>Sign Up failed</div>}
      </div>

      
          </section>
  );
};

export default Signup;
