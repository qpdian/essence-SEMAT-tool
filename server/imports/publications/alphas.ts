import {Alphas} from '../../../both/collections/alphas.collection';
import {Meteor} from 'meteor/meteor';
function matchName(name?: string): Object {
    const searchRegEx = { '$regex': '.*' + (name || '') + '.*', '$options': 'i' };

    return  { 'name': searchRegEx } ;
}

Meteor.publish('alphas', function(options: any, name?: string) {
    //const selector = matchName.call(this, name);
    //Counts.publish(this, 'numberOfAlphas', Alphas.find(isAvailable.call(this)), { noReady: true });
    return Alphas.find();
});
Meteor.publish('alpha', function(alphaId: string) {
    return Alphas.find({ _id: alphaId });
});
