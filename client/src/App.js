import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PageContent from "./components/PageContent";



import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const link = new HttpLink({
  uri: 'http://127.0.0.1:3001/graphql',
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

// const client = new ApolloClient({
//   request: operation => {

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     });
//   },
//   uri: '/graphql'
// });


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
