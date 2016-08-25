import {RouterConfig} from '@angular/router';
import {HeaderComponent} from './header/header.component';

//noinspection TypeScriptValidateTypes
export const WelcomeRoutes: RouterConfig = [
  {
    path: '',
    component: HeaderComponent
  }
];