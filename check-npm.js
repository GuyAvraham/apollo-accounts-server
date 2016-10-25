import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'graphql-server-express': '^0.4.3',
  'express': '^4.13.4',
  'graphql-tools': '^0.8.0',
}, 'davidyaha:apollo-accounts-server');
