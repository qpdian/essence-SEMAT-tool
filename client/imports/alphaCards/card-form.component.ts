import { Component, OnInit, Input} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import template from './card-form.component.html';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {HTTP_PROVIDERS} from '@angular/http';
import {AlphaCard} from './alpha-card'
@Component({
    selector: 'card-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon],
    providers: [HTTP_PROVIDERS, MdIconRegistry],
})
export class CardFormComponent implements OnInit {
    @Input()
    alphaCard: AlphaCard;
    addAlphaState: FormGroup;
    constructor(private formBuilder: FormBuilder) {
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
        if (this.addAlphaState.valid) {
            this.alphaCard.addAlphaState(this.addAlphaState.value.nameState);
            this.resetForm();
        }
    }
}