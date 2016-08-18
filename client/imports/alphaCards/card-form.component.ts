import { Component, OnInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import template from './card-form.component.html';
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
import {CardService} from './card.service';
@Component({
    selector: 'card-form',
    template,
    directives: [HighlightDirective, REACTIVE_FORM_DIRECTIVES, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon, MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MdCheckbox],
    providers: [HTTP_PROVIDERS, MdIconRegistry, CardService],
})
export class CardFormComponent implements OnInit {
    @Input()
    alphaCard: AlphaCard;
    addAlphaState: FormGroup;
    constructor(private formBuilder: FormBuilder,private cardService: CardService) {
    }
    ngOnInit() {
        this.addAlphaState = this.formBuilder.group({
            nameState: ['', Validators.required]
        });
    }
    resetForm() {
        this.addAlphaState.controls['nameState']['updateValue']('');
    }
    addAlphaStateCard() {
                  alert('fff');
        if (this.addAlphaState.valid) {
  
            this.alphaCard.addAlphaState(this.addAlphaState.value.nameState);
            this.resetForm();
        }
    }
}