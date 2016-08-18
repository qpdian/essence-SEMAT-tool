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
import {AlphaCard} from './alpha-card'
import {CardDetailComponent} from './card-detail.component';
import {CardFormComponent} from './card-form.component';
import {CardService} from './card.service';
@Component({
    selector: 'card',
    template,
    directives: [HighlightDirective, CardDetailComponent, CardFormComponent, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon, MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MdCheckbox],
    providers: [HTTP_PROVIDERS, MdIconRegistry, CardService],
})


export class CardComponent implements OnInit {
    cards: AlphaCard[] = [];
    selectedCard: AlphaCard;
    constructor(private cardService: CardService) {
        // this.cards.push(new AlphaCard(1, 'Stakeholder', 'Customer'));
        // this.cards.push(new AlphaCard(2, 'Oportunity', 'Customer'));
        // this.cards.push(new AlphaCard(3, 'Requeriments', 'Solution'));
        // this.cards.push(new AlphaCard(4, 'Software', 'Solution'));
        // this.cards.push(new AlphaCard(5, 'Team', 'Endeavor'));
        // this.cards.push(new AlphaCard(6, 'Way of working', 'Endeavor'));
        // this.cards.push(new AlphaCard(7, 'Work', 'Endeavor'));
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