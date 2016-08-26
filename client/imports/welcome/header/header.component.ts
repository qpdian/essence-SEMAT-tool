
import { Component} from '@angular/core';
import template from './header.component.html';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'main-header',
    template,
    directives: [ROUTER_DIRECTIVES]

})
export class HeaderComponent {
 
}
