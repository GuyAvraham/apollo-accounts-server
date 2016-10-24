import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'apollo-server': '^0.3.0',
  'express': '^4.13.4',
  'graphql-tools': '^0.8.0',
}, 'davidyaha:apollo-accounts-server');
