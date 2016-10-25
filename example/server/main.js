import {createApolloServer} from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import AccountsConfig from 'meteor/davidyaha:apollo-accounts-server';

const executableSchema = makeExecutableSchema({
	typeDefs: AccountsConfig.schema,
	resolvers: AccountsConfig.resolvers
})

createApolloServer({
	schema: executableSchema
})