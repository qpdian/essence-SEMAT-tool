


import {Mongo} from 'meteor/mongo';
import {Alpha} from '../interfaces/alpha.interface';

export const Alphas = new Mongo.Collection<Alpha>('alphas');
function loggedIn() {
  return !!Meteor.user();
}
Alphas.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
