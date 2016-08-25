import { RouterConfig, provideRouter } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { AppRoutes } from './imports/app/app.routes';
import { WelcomeRoutes } from    './imports/welcome/welcome.routes';

const routes: RouterConfig = [
    //{ path: '', component: HeaderComponent },
    //{ path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['CanActivateForLoggedIn'] },
    //{ path: 'card', component: CardComponent, outlet: 'main'},
   // { path: 'essboard', component: AppMainComponent},
   ...WelcomeRoutes,
   ...AppRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    { provide: "CanActivateForLoggedIn", useValue: () => !!Meteor.userId() }
];



