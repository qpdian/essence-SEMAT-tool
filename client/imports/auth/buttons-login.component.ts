import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { MeteorComponent } from 'angular2-meteor';
import { Meteor } from 'meteor/meteor';

import { DisplayNamePipe } from '../shared/display-name.pipe';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'login-buttons',
    template: `
        <span flex></span>
        <div class="navbar-right navbar-text">
            <div [hidden]="user">
                <a md-button [routerLink]="['/login']">Login</a>
                <a md-button [routerLink]="['/signup']">Sign up</a>
            </div>
            <div [hidden]="!user">
                <span>{{ user | displayName }}</span>
                <button md-button (click)="logout()">Logout</button>
            </div>
        </div>`,
    directives: [ROUTER_DIRECTIVES,
        MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    pipes: [DisplayNamePipe]
})
export class ButtonLoginComponent extends MeteorComponent {
    user: Meteor.User;
    constructor() {
        super();
    }
    logout() {
        Meteor.logout();
    }
}