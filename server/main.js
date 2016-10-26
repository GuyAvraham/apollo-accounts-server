import '../check-npm.js';

import {typeDefs, schema} from './imports/api/schema';
import resolvers from './imports/api/resolvers';
import UserAccount from './imports/models/user-account';
import { makeExecutableSchema } from 'graphql-tools';

export default makeExecutableSchema({
	typeDefs: [typeDefs, schema],
	resolvers: resolvers
});

export {typeDefs, rootObjectsExtension, schema} from './imports/api/schema';

export {UserAccount, resolvers};
