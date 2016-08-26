import { Component, OnInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
import {HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
/* Angular Material */
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import { MdCheckbox } from '@angular2-material/checkbox';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
/* Directives and services */
import template from './board.component.html';
import { HighlightDirective } from '../../shared/highlight.directive';
import {AlphaCard} from './alpha-card'
import {CardService} from './card.service';
/* Components */
import {CardDetailComponent} from './card-detail.component';
import {CardFormComponent} from './card-form.component';
import {AlphasListComponent} from './alphas-list.component';
/* Drag and drop */
import { DragulaService, Dragula } from 'ng2-dragula/ng2-dragula';


@Component({
    selector: 'board',
    template,
    directives: [HighlightDirective,Dragula, CardDetailComponent, CardFormComponent,AlphasListComponent, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon, MD_LIST_DIRECTIVES, MD_GRID_LIST_DIRECTIVES,ROUTER_DIRECTIVES, MdCheckbox],
    providers: [HTTP_PROVIDERS, MdIconRegistry, CardService,DragulaService],
})


export class BoardComponent implements OnInit {
    cards: AlphaCard[] = [];
    selectedCard: AlphaCard;
    constructor(private cardService: CardService) {
    }
    ngOnInit() {
        this.getCards();
    }
    getCards() {
        this.cardService.getCards().then(cards => this.cards = cards);
    }

    onSelect(card: AlphaCard) {
        this.selectedCard = card;
        alert(this.selectedCard.area);
    }
    goBack() {
        window.history.back();
    }
    
}
