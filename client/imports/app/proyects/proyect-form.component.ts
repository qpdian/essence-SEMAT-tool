import { Component, OnInit, Input} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import template from './proyect-form.component.html';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'proyect-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon],
    providers: [HTTP_PROVIDERS, MdIconRegistry],
})
export class ProyectFormComponent implements OnInit {
    addProyectForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
    }
    ngOnInit() {
        this.addProyectForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }
    resetForm() {
         for (let name in this.addProyectForm.controls) {
            this.addProyectForm.controls[name].updateValueAndValidity();
        this.addProyectForm.controls[name].clearValidators();
        }
    }
    addProyect() {
        if (this.addProyectForm.valid) {
            //this.alphaCard.addAlphaState(this.addProyectForm.value.nameState);
            this.resetForm();

        }

    }
}