import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PageContent from "./components/PageContent";

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});


function App() {
  return (
   <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
      <Header></Header>
      </header>
      <main>
        <PageContent></PageContent>
      </main>
      <Footer></Footer>
    </div>
   </ApolloProvider>
  );
}

export default App;
