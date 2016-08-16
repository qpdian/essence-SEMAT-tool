import { Component, OnInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
import template from './card.component.html';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HighlightDirective } from './highlight.directive';



@Component({
    selector: 'card',
    template,
    directives: [HighlightDirective, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon, MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MdCheckbox],
    providers: [HTTP_PROVIDERS, MdIconRegistry],
})


export class CardComponent  {
    hide : boolean = true;

    show(){
      this.hide= false;
    }

    



}
