import {createApolloServer} from 'meteor/apollo';
import executableSchema from 'meteor/davidyaha:apollo-accounts-server';

createApolloServer({
	schema: executableSchema
})