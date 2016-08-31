
import { Component} from '@angular/core';
import template from './header.component.html';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ButtonLoginComponent } from '../../auth/buttons-login.component';


@Component({
    selector: 'main-header',
    template,
    directives: [ROUTER_DIRECTIVES,ButtonLoginComponent]

})
export class HeaderComponent {
 
}
