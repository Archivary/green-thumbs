import React, { useState } from 'react';
import Axios from 'axios'; // make http requests
import { Image } from 'cloudinary-react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PageContent from './components/PageContent';

function App() {
  const [imageSelected, setImageSelected] = useState('');
  //const [url, setUrl] = useState('');

  const uploadImage = () => {
    //console.log(files[0]);
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'w3r99hij'); // preset created in cloudinary
    Axios.post(
      'https://api.cloudinary.com/v1_1/green-thumbs/image/upload',
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Header></Header>
      </header>
      <div>
        <input
          type='file'
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}> Upload Image</button>
        <Image
          style={{ width: 200 }}
          cloudName='green-thumbs'
          publicId='https://res.cloudinary.com/green-thumbs/image/upload/v1621291707/dmddwt512mazxwgqezcv.jpg'
        />
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
