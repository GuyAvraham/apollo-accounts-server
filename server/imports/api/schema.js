const queries = `
  me: User
  user(id: ID!): User
`;

const mutations = `
  createAccount(user: UserPasswordInput): User
  createAccountAndLogin(user: UserPasswordInput): Token
  loginWithPassword(user: UserPasswordInput): Token
  createGuestUser: Token
  registerGuest(user: UserPasswordInput): User
`;

export const typeDefs = `
  type Token {
    userId: ID!
    token: String!
    tokenExpiration: Float!
  }
  
  input UserPasswordInput {
    email: String
    username: String
    password: String
  }

  type User {
    id: ID!
    email: String
    username: String
  }
`;

export const rootObjectsExtension = `
  extend type RootQuery {
    ${queries}
  }

  extend type RootMutation {
    ${mutations}
  }
`;

export const schema = `
  type RootQuery {
    ${queries}
  }

  type RootMutation {
    ${mutations}
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;
