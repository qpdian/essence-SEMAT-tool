import { Component, Input} from '@angular/core';
import template from './card-detail.component.html';
import {AlphaCard} from './alpha-card';
import {NgClass} from '@angular/common';
@Component({
    selector: 'card-detail',
    template,
    directives: [NgClass]

})
export class CardDetailComponent {
    @Input()
    alphaCard: AlphaCard;

}