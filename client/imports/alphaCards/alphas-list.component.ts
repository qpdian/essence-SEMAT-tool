import {Component,OnInit} from '@angular/core';
import {Mongo} from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import template from './alphas-list.component.html';
import {AlphasDataService } from './alphas-data.service.ts';
import { Alphas }   from '../../../both/collections/alphas.collection';
import {CardDetailComponent} from './card-detail.component';

@Component({
    selector:'alphas-list',
    template,
    directives: [ CardDetailComponent],
    providers : [AlphasDataService]
})
export class AlphasListComponent extends MeteorComponent implements OnInit{
    alphas : Mongo.Cursor<any>;
    loading: boolean = false;
    constructor() {
        super();
    }

    ngOnInit() {
        this.alphas = Alphas.find();
        //this.alphas = this.alphasDataService.getData();
           //this.autorun(() => {
           // this.loading = true;
            this.subscribe('alphas', () => {
                this.alphas = Alphas.find();
            }, true);
        //});
    }    




}