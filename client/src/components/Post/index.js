// import Auth from '../../utils/auth';
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_PLANT } from '../../utils/mutations';

function Post() {

    // const loggedIn = Auth.loggedIn();

    // const [ name,
    //     description,
    //     image,
    //     maintenance,
    //     waterneeds,
    //     categories] = useState('');

    const [formState, setFormState] = useState({ name: '',
                                                description: '',
                                                image: '',
                                                maintenance: '',
                                                waterneeds: '',
                                                categories: '' });
    const [addPlant, { error }] = useMutation(ADD_PLANT);
      
  
    // update state based on form input changes
    const handleChange = event => {

    const { name, value } = event.target;

    setFormState({
        ...formState,
        [name]: value})

        };
  
    // submit form
    const handleFormSubmit = async event => {
      event.preventDefault();
  
      try {
         const { data } = await addPlant({
          variables: {  ...formState }
          
        });
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };


  

    return (
        <section id="addPlant">

        {/* {loggedIn && ( */}
                <div> 
            <h2>Post a Plant</h2>

            <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div >
                <label htmlFor="name"><b>Plant Type:</b></label>
                <input type="text" name="name" value={formState.name} onChange={handleChange} />
                </div>
                <br></br>
                <br></br>  
                <div> 
                <label htmlFor="description"><b>Description:</b></label>
                <input type="text" name="description" value={formState.description} onChange={handleChange} />
                </div>
                {/* <br></br>
                <br></br>
                <div>
                <label htmlFor="description"><b>Image:</b></label>
                <input type="text" name="image" value={formState.image} onChange={handleChange} />
                </div> */}
                <br></br>
                <br></br>
                <div>
                <label htmlFor="description"><b>Season:</b></label>
                <select id="seasons" name="seasons" value={formState.categories} onChange={handleChange}  >
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
                <input type="text" name="Maintenance" value={formState.maintenance} onChange={handleChange} />
                </div>
                <br></br>
                <br></br>
                <div>
                <label htmlFor="description"><b>Water Needs:</b></label>
                <input type="text" name="waterneeds" value={formState.waterneeds} onChange={handleChange} />
                </div>
                <br></br>
                <br></br>
                <button type="submit">Add Plant</button>
                {error && <div>Plant Post failed</div>}
            </form>
            </div>
            
            {/* <button type="submit" onClick={addPlant}>Add Plant</button> */}
            

            <br></br>
            <br></br>
            </div>
             {/* )}
            <div>
                <h3>Must Log in to Post!</h3>
            </div>  */}
        </section>
        
    );
  }
  
  export default Post;