import { Parties } from '../../../both/collections/parties.collection';
import { Party} from '../../../both/interfaces/party.interface';

export function loadParties() {

    if (Parties.find().count() === 0) {
        for (var i = 0; i < 27; i++) {
            Parties.insert({
                name: Fake.sentence(50),
                location: {name:Fake.sentence(10)},
                description: Fake.sentence(100),
                public: true
            });
        }
        const parties: Party[] = [
            {
                name: 'Dubstep-Free Zone',
                description: 'Can we please just for an evening not listen to dubstep.',
                location: {
                    name: 'Palo Alto'
                },
                public: true
            },
            {
                name: 'All dubstep all the time',
                description: 'Get it on!',
                location: {
                    name: 'Palo Alto'
                },
                public: true
            },
            {
                name: 'Savage lounging',
                description: 'Leisure suit required. And only fiercest manners.',
                location: {
                    name: 'Palo Alto'
                },
                public: true
            }
        ];
        parties.forEach((party) => Parties.insert(party));
    }
}
