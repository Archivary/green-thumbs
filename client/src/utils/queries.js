import gql from 'graphql-tag';

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
  }
}
`;

export const QUERY_PLANT = gql`
  query plant($id: ID!) {
    plant(plantId: $id) {
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