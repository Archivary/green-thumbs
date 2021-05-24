const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    savedPlants: [Plant]
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    plants(username: String!): [Plant]
    plant(_id: ID!): Plant
  }
  type Plant {
      _id: ID
      name: String
      season: String
      maintenance: String
      image: String
      waterneeds: String
  }
  type Auth {
      token: ID!
      user: User
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addPlant(name: String!, season: String!, maintenance: String!, image: String!, waterneeds: String!): Plant
    removePlant(plantId: String!): User
  }
`;

module.exports = typeDefs;
