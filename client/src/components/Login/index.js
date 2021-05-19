import React from 'react';
import homePlant from "../../assets/homePlant.jpg";


function Login() {
    function loggedin(){
        // Go to homepage
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
  }
  

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
            
            <form >
                
                <div className="container">
                <br></br>
                <br></br>  
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <br></br>
                <br></br>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <br></br>
                <br></br>   
                <button type="submit" onClick={loggedin}>Login</button>
                <br></br>
                <br></br>  
                </div>
            </form>
            </div>

            
                </section>
    );
  
};


  
  export default Login;