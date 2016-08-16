import {Parties} from '../../../both/collections/parties.collection';
import {Meteor} from 'meteor/meteor';
function matchLocation(location?: string): Object {
    const searchRegEx = { '$regex': '.*' + (location || '') + '.*', '$options': 'i' };

    return { $and: [{ 'location.name': searchRegEx }, isAvailable] };
}
function isAvailable(): Object {
    return {
        $or: [
            { 'public': true },
            {
                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
            },
            {
                $and: [
                    { invited: this.userId },
                    { invited: { $exists: true } }
                ]
            }
    ]
};
}

Meteor.publish('parties', function(options: any, location?: string) {
    const selector = matchLocation.call(this, location);
    Counts.publish(this, 'numberOfParties', Parties.find(isAvailable.call(this)), { noReady: true });
    return Parties.find(selector, options);
});
Meteor.publish('party', function(partyId: string) {
    return Parties.find({ $and: [{ _id: partyId }, isAvailable.call(this)] });
});
