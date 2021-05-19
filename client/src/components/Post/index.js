import React from 'react';

function Post() {

    function addPlant(){
        // Go to homepage
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
  }

    return (
        <section id="addPlant">
            <h2>Post a Plant</h2>

            <div className="container">
            <form >
                <div >
                <label htmlFor="name"><b>Plant Type:</b></label>
                <input type="text" name="name" required/>
                </div>
                <br></br>
                <br></br>  
                <div> 
                <label htmlFor="description"><b>Description:</b></label>
                <input type="text" name="description" required/>
                </div>
                <br></br>
                <br></br>
                <div>
                <label htmlFor="description"><b>Image:</b></label>
                <input type="text" name="image" required/>
                </div>
                <br></br>
                <br></br>
                <div>
                <label htmlFor="description"><b>Season:</b></label>
                <select id="seasons" name="seasons">
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                </select>
                </div>
                <br></br>
                <br></br>
                <div>
                <label htmlFor="description"><b>Maintenance:</b></label>
                <input type="text" name="Maintenance" required/>
                </div>
                <br></br>
                <br></br>
                <div>
                <label htmlFor="description"><b>Water Needs:</b></label>
                <input type="text" name="waterneeds" required/>
                </div>
                <br></br>
                <br></br>
            </form>
            </div>
            <button type="submit" onClick={addPlant}>Add Plant</button>
            <br></br>
            <br></br>
        </section>
        
    );
  }
  
  export default Post;