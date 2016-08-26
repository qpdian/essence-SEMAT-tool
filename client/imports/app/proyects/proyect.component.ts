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
import {MD_PROGRESS_BAR_DIRECTIVES} from '@angular2-material/progress-bar';
/* Directives and services */
import template from './proyect.component.html';

/* Components */
import {ProyectFormComponent} from './proyect-form.component';
import {ProyectDetailComponent} from './proyect-detail/proyect-detail.component';
/* Drag and drop */
import { DragulaService, Dragula } from 'ng2-dragula/ng2-dragula';


@Component({
    selector: 'proyect',
    template,
    directives: [Dragula, ProyectFormComponent,ProyectDetailComponent,MD_PROGRESS_BAR_DIRECTIVES, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon, MD_LIST_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MdCheckbox],
    providers: [HTTP_PROVIDERS, MdIconRegistry, DragulaService],
})


export class ProyectComponent implements OnInit {
    proyects: any[] = [];
    hideForm: boolean = true;
    constructor() {
    }
    ngOnInit() {
        this.getProyects();
    }
    getProyects() {
        for (var index = 1; index < 10; index++) {
            this.proyects.push({
                name: 'Proyecto ' + index,
                percent: 10*index
            });
        }
    }
    showForm() {
        this.hideForm = !this.hideForm;
    }
}
