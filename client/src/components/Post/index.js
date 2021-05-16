import React from 'react';

function Post() {

    return (
        <section>
            <h2>Add a Plant</h2>
            
            <div id="addPlant">
            <form >
                <div className="container">
                <label htmlFor="name"><b>Plant Type:</b></label>
                <input type="text" name="name" required/>

                <label htmlFor="description"><b>Description:</b></label>
                <input type="text" name="description" required/>

                <label htmlFor="description"><b>Image:</b></label>
                <input type="text" name="image" required/>

                <label htmlFor="description"><b>Season:</b></label>
                <select id="seasons" name="seasons">
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                </select>
                {/* <input type="submit" value="Submit" required/> */}

                <label htmlFor="description"><b>Maintenance:</b></label>
                <input type="text" name="Maintenance" required/>

                <label htmlFor="description"><b>Water Needs:</b></label>
                <input type="text" name="waterneeds" required/>
                       
                </div>
            </form>
            </div>
        </section>
    );
  }
  
  export default Post;