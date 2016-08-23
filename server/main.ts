

import {loadParties} from './imports/fixtures/parties';
import {loadAlphas} from  './imports/fixtures/alphas';
import {Meteor} from 'meteor/meteor';
import './imports/publications/parties';
import './imports/publications/users';
import './imports/publications/alphas';
import '../both/methods/parties.methods';
import '../both/methods/alphas.methods';
 
Meteor.startup(() => {
  loadParties();
  loadAlphas();
});
