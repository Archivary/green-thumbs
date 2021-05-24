import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Post from './Post';
import NavTabs from './NavTabs';


function Page() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState('Login');
  
    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
      switch (currentPage) {
        case 'Home':
          return <Home />;
        case 'Post':
          return <Post />;
        case 'Login':
          return <Login />;
        case 'Signup':
          return <Signup />;
        default:
          return <Signup />;
      }
    };
  
    return (
      <header> 
      <div>
        {/* Pass the state value and the setter as props to NavTabs */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* <Signup/> */}
        {/* Call the renderPage function passing in the currentPage */}
        <div>{renderPage(currentPage)}</div>
      </div>
      </header>
    );
  }
  
  export default Page;
  