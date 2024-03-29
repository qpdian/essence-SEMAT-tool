import { Component, OnInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
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
//import { App, NavController } from 'ionic-angular';
/* Directives and services */

import template from './proyect-detail.component.html';

/* Components */
//import Chart from  'chart.js/src/chart.js';
/* Drag and drop */
import { DragulaService, Dragula } from 'ng2-dragula/ng2-dragula';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
//import { CHART_DIRECTIVES } from 'angular2-highcharts';


@Component({
    selector: 'proyect-detail',
    template,
    directives: [Dragula, MD_PROGRESS_BAR_DIRECTIVES, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon, MD_LIST_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, ROUTER_DIRECTIVES, CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES, MdCheckbox],
    providers: [HTTP_PROVIDERS, MdIconRegistry, DragulaService],
})


export class ProyectDetailComponent implements OnInit {
    // Radar
    public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
    dimensions: any[] = [];
    dimensionSelected: any;
    constructor() {
        this.dimensionSelected = null;
    }
    ngOnInit() {
        this.getDimensions();
    }
    getDimensions() {
        this.dimensions.push({
            name: 'Oportunidad ', cols: 7, percent: 20, states: [
                { name: 'Identificado', number: '1' },
                { name: 'Solucion Necesaria', number: '2' },
                { name: 'Valor Identificado', number: '3' },
                { name: 'Viable', number: '4' },
                { name: 'Direccionado', number: '5' },
                { name: 'Beneficio Acumulado', number: '6' }]
        });
        this.dimensions.push({
            name: 'Interesado ', cols: 7, percent: 30, states: [
                { name: 'Reconocido', number: '1' },
                { name: 'Representado', number: '2' },
                { name: 'Involucrado', number: '3' },
                { name: 'De acuerdo', number: '4' },
                { name: 'Satisfecho por el despliegue', number: '5' },
                { name: 'Satisfecho por el uso', number: '6' }]
        });
        this.dimensions.push({
            name: 'Requerimientos ', cols: 7, percent: 10, states: [
                { name: 'Concebido', number: '1' },
                { name: 'Limitado', number: '2' },
                { name: 'Coherente', number: '3' },
                { name: 'Aceptable', number: '4' },
                { name: 'Direccionado', number: '5' },
                { name: 'Completado', number: '6' }]
        });

        this.dimensions.push({
            name: 'Sistema de Software ', cols: 7, percent: 10, states: [
                { name: 'Arquitectura Seleccionada', number: '1' },
                { name: 'Demostrable', number: '2' },
                { name: 'Usable', number: '3' },
                { name: 'Listo', number: '4' },
                { name: 'Operacional', number: '5' },
                { name: 'Retirado', number: '6' }]
        });
        this.dimensions.push({
            name: 'Equipo ', cols: 6, percent: 20, states: [
                { name: 'Sembrado', number: '1' },
                { name: 'Formado', number: '2' },
                { name: 'Colaborando', number: '3' },
                { name: 'Ejecutando', number: '4' },
                { name: 'Suspendido', number: '5' }]
        });
        this.dimensions.push({
            name: 'Trabajo ', cols: 7, percent: 40, states: [
                { name: 'Iniciado', number: '1' },
                { name: 'Preparado', number: '2' },
                { name: 'Comenzado', number: '3' },
                { name: 'Bajo control', number: '4' },
                { name: 'Comcluido', number: '5' },
                { name: 'Cerrado', number: '6' }]
        });
        this.dimensions.push({
            name: 'Forma de trabajo ', cols: 7, percent: 40, states: [
                { name: 'Principios Establecidos', number: '1' },
                { name: 'Fundamentos Establecidos', number: '2' },
                { name: 'En uso', number: '3' },
                { name: 'En lugar', number: '4' },
                { name: 'Trabajando bien', number: '5' },
                { name: 'Retirado', number: '6' }]
        });
    }
    showSelect(select: any) {
        this.dimensionSelected = select;
    }
}


