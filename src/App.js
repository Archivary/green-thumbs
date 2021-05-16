import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PageContent from "./components/PageContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      </header>
      <main>
        <PageContent></PageContent>
      </main>
      <Footer></Footer>
    </div>
   
  );
}

export default App;
