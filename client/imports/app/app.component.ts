import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_DIRECTIVES  } from '@angular/router';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import {MdToolbar } from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import template from './app.component.html';


@Component({
  selector: 'app',
  template,
  directives: [MdToolbar, MD_SIDENAV_DIRECTIVES, MdButton, MD_LIST_DIRECTIVES, MdIcon, ROUTER_DIRECTIVES, LoginButtons],
  providers: [HTTP_PROVIDERS, MdIconRegistry]
})

export class AppMainComponent {
  views: Object[] = [
    {
      name: "Inicio",
      description: "Pagina principal",
      icon: "home",
      route: '/'
    },
    {
      name: "Proyectos",
      description: "Page for alpha cards",
      icon: "folder",
      route: 'proyect'

    },
    {
      name: "Practicas",
      description: "Page for alpha cards",
      icon: "extension",
      route: 'board'

    },
    {
      name: "Competencias",
      description: "Page for alpha cards",
      icon: "star",
      route: 'board'

    }
  ];

}
