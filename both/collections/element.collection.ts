


import {Mongo} from 'meteor/mongo';
import {Element} from '../interfaces/element.interface';

export const Elements = new Mongo.Collection<Element>('elements');
function loggedIn() {
  return !!Meteor.user();

}
Elements.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
