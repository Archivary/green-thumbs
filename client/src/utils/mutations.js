import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PLANT = gql`
  mutation addPlant($name: String!) {
    addPlant(name: $name) {
      _id
      name
      description
      image
      maintenance
      waterneeds
      season 
    }
  }
`;

export const REMOVE_PLANT = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      name
    }
  }
`;