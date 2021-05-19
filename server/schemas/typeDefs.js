const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedPlants: [Plant]
  }

  type Query {
    me: User
    users: [User]
  }

  type Plant {
      plantId: String
      type: String
      season: String
      maintenance: String
      image: String
      waterneeds: String
  }

  type Auth {
      token: ID
      user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePlant(type: String!, season: String!, plantId: ID!, maintenance: String!, waterneeds: String!): User
    removePlant(plantId: String!): User
  }


`;

module.exports = typeDefs;
