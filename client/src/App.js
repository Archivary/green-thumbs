import React, { useState } from 'react';
//import Axios from 'axios'; // make http requests
//import { Image } from 'cloudinary-react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PageContent from './components/PageContent';

function App() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  //const [url, setUrl] = useState('');

  const uploadImage = async (event) => {
    //console.log(files[0]);
    const files = event.target.files;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'w3r99hij'); // preset created in cloudinary
    setLoading(true);
    // Axios.post(
    //   'https://api.cloudinary.com/v1_1/green-thumbs/image/upload',
    //   formData
    // ).then((response) => {
    //   console.log(response);
    // });
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/green-thumbs/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );

    const file = await res.json();
    console.log(file);

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Header></Header>
      </header>
      <div>
        <input type='file' onChange={uploadImage} />
        <button onClick={uploadImage}> Upload Image</button>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={image} alt='' style={{ width: '200px' }} />
        )}
        {/* <Image
          style={{ width: 200 }}
          cloudName='green-thumbs'
          publicId='https://res.cloudinary.com/green-thumbs/image/upload/v1621291707/dmddwt512mazxwgqezcv.jpg'
        /> */}
      </div>

      {/* <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} alt='description' />
      </div> */}

      <main>
        <PageContent></PageContent>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
