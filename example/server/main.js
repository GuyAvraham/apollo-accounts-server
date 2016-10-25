import {createApolloServer} from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import AccountsConfig, {schemaString } 
			from 'meteor/davidyaha:apollo-accounts-server';

const executableSchema = makeExecutableSchema({
	typeDefs: schemaString,
	resolvers: AccountsConfig.resolvers
})

createApolloServer({
	schema: executableSchema
})