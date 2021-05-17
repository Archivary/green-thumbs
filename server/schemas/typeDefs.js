const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Plants {
    _id: ID
    name: String
    description: String
    image: String
    maintenance: String
    waterneeds: String
    category: Category
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    plants(category: ID, name: String): [Plants]
    plants(_id: ID!): Plants
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
  }
`;

module.exports = typeDefs;
