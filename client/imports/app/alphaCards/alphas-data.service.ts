import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { Injectable } from '@angular/core';
import {Alpha} from '../../../../both/interfaces/alpha.interface';
import { Alphas }   from '../../../../both/collections/alphas.collection';
import { Component, OnInit } from '@angular/core';


@Injectable()
export class AlphasDataService extends MeteorComponent implements OnInit {
  private data: Mongo.Cursor<Alpha>;

  constructor() {
    super();
  }
  ngOnInit() {
    this.subscribe('alphas', null, '', () => {
      this.data = Alphas.find();
    }, true);
  }
  getData(): Mongo.Cursor<Alpha> {
    return this.data;
  }

}
