# Apollo Accounts Server

This is a meteor package that wraps meteor's Accounts package with a GraphQL schema and resolvers.

## Run Example

```
git clone https://github.com/davidyaha/apollo-accounts-server
cd apollo-accounts-server/example
meteor npm install
meteor
```

Open your browser on http://localhost:3000/graphql and run these queries on GraphiQL:
 
### Create user
```
mutation register($user: {username: "user", password: "password"}) {
  createAccount(user: $user) {
    id
    username
  }
}
```

### Login
```
mutation {
  loginWithPassword(user: {username: "user", password: "password"}) {
    userId
    token
    tokenExpiration
  }
}
```

### Client oriented create and login
```
mutation {
  createAccountAndLogin(user: {username: "user", password: "password"}) {
    userId
    token
    tokenExpiration
  }
}
```

### Create guest user
```
mutation {
  createGuestUser {
    userId
    token
    tokenExpiration
  }
}
```

## Usage

### Create accounts based apollo-server

Install this package
```
meteor add davidyaha:apollo-accounts-server
meteor npm install --save graphql-tools graphql-server-express express 
```

Add the following on server/main.js
```js
import {createApolloServer} from 'meteor/apollo';
import executableSchema from 'meteor/davidyaha:apollo-accounts-server';

createApolloServer({
  schema: executableSchema
})
```

### Mix in with your GraphQL schema

For minimum configuration use `RootQuery` as the of your query type, and `RootMutation` as your mutation type.
```js
// server/main.js

import {createApolloServer} from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import {resolvers as accountsResolvers, 
        typeDefs as accountsTypeDefs,
        rootObjectsExtension as accountsExtention} 
            from 'meteor/davidyaha:apollo-accounts-server';
import mySchema from './imports/api/schema';
import myResolvers from './imports/api/resolvers';

const executableSchema = makeExecutableSchema({
  typeDefs: [accountsTypeDefs, accountsExtention, ...mySchema],
  resolvers: {...myResolvers, ...accountsResolvers};
});

createApolloServer({
  schema: executableSchema
});


```

Or use your own naming and just add the exported queries and mutations
```js
// server/imports/api/schema.js

import {queries, mutations, typeDefs as accountsTypes} from 'meteor/davidyaha:apollo-accounts-server'

export const schema = `
  ${accountsTypes}
  
  type MyType {
    name: String
  }  

  type queries {
    myQuery(arg1: String): MyType
    getUserByTitle(title: String): User
    ${queries}
  }
  
  type Mutation {
    ${mutations}
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

```
