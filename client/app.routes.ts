import { RouterConfig, provideRouter } from '@angular/router';

import { PartiesListComponent } from './imports/parties/parties-list.component';
import { PartyDetailsComponent } from './imports/parties/party-details.component';
import { CardComponent} from './imports/alphaCards/card.component';
import { Meteor } from 'meteor/meteor';

const routes: RouterConfig = [
    { path: '', component: PartiesListComponent },
    { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['CanActivateForLoggedIn'] },
    { path: 'card', component: CardComponent},
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    { provide: "CanActivateForLoggedIn", useValue: () => !!Meteor.userId() }
];
