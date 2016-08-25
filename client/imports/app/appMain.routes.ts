import {RouterConfig} from '@angular/router';
import {AppMainComponent} from './appMain.component';
import { CardComponent} from '../alphaCards/card.component';


//noinspection TypeScriptValidateTypes
export const AppMainRoutes: RouterConfig = [
  {
    path: 'essboard',
    component: AppMainComponent,
      children: [
      {
        path: 'card',
        component: CardComponent,
      }
    ]
  }];