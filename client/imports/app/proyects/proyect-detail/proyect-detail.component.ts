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
import template from './proyect-detail.component.html';

/* Components */

/* Drag and drop */
import { DragulaService, Dragula } from 'ng2-dragula/ng2-dragula';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
    selector: 'proyect-detail',
    template,

    directives: [Dragula, MD_PROGRESS_BAR_DIRECTIVES, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon, MD_LIST_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MdCheckbox],
    providers: [HTTP_PROVIDERS, MdIconRegistry, DragulaService],
})


export class ProyectDetailComponent {
    // Radar
    public radarChartLabels: string[] = ['Requerimientos', 'Interesados', 'Oportunidad', 'Software', 'Equipo', 'Trabajo', 'Forma de trabajo'];

    public radarChartData: any = [
        { data: [10, 19, 9, 8, 6, 5, 40], label: 'Semana 1' },
        { data: [28, 48, 40, 19, 96, 27, 50], label: 'Semana 2' },
        { data: [40, 58, 70, 29, 96, 47, 100], label: 'Semana 3' }
    ];
    public radarChartType: string = 'radar';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
