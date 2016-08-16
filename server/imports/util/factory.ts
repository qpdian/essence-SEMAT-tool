import { Parties }   from '../../../both/collections/parties.collection';
import {Mongo} from 'meteor/mongo';
import {Party} from '../../../both/interfaces/party.interface';
export class Factory {
    public static get(name: string) {
        const value = null;
        switch (name) {
            //case "Party": return new Mongo.Collection<Party>('parties'); break;
        }
        return value;
    }
}
