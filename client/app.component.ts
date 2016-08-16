import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import template from './app.component.html';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import {MdToolbar } from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon,MdIconRegistry} from '@angular2-material/icon';
@Component({
  selector: 'app',
  template,
  directives: [MdToolbar,MD_SIDENAV_DIRECTIVES,MdButton, MD_LIST_DIRECTIVES,MdIcon,ROUTER_DIRECTIVES,LoginButtons],
  providers: [HTTP_PROVIDERS, MdIconRegistry]


})
export class AppComponent {
  views: Object[] = [
   {
     name: "Inicio",
     description: "Pagina principal",
     icon: "home",
     route:'/'
   },
   {
     name: "Cards",
     description: "Page for alpha cards",
     icon: "favorite",
     route:'card'

   }
 ];

}
