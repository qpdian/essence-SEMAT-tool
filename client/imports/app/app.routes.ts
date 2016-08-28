import { RouterConfig } from '@angular/router';
import { AppMainComponent } from './app.component';

import { CardComponent } from './alphaCards/card.component';
import { BoardComponent } from './alphaCards/board.component';
import { ProyectComponent } from './proyects/proyect.component';
import { ProyectDetailComponent } from './proyects/proyect-detail/proyect-detail.component';



//noinspection TypeScriptValidateTypes
export const AppRoutes: RouterConfig = [
  {
    path: 'essboard',
    component: AppMainComponent,
    children: [
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'board',
        component: BoardComponent,
      },
      {
        path: 'proyect',
        component: ProyectComponent,
      },
      {
        path: 'proyect-detail',
        component: ProyectDetailComponent,
      },



    ]
  }];