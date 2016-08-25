import { RouterConfig, provideRouter } from '@angular/router';

import { PartiesListComponent } from './imports/parties/parties-list.component';
import { HeaderComponent } from './imports/homePage/header/header.component';
import { PartyDetailsComponent } from './imports/parties/party-details.component';
import { CardComponent} from './imports/alphaCards/card.component';
import { AppMainComponent} from './imports/app/appMain.component';
import { Meteor } from 'meteor/meteor';
import { AppMainRoutes } from './imports/app/appMain.routes';
import {HomeRoutes} from    './imports/homePage/home.routes';

const routes: RouterConfig = [
    //{ path: '', component: HeaderComponent },
    //{ path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['CanActivateForLoggedIn'] },
    //{ path: 'card', component: CardComponent, outlet: 'main'},
   // { path: 'essboard', component: AppMainComponent},
   ...HomeRoutes,
   ...AppMainRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    { provide: "CanActivateForLoggedIn", useValue: () => !!Meteor.userId() }
];



