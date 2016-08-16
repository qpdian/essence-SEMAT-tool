import { Mongo } from 'meteor/mongo';
import { Injectable } from '@angular/core';
import {Party} from '../../../both/interfaces/party.interface';
import { Parties }   from '../../../both/collections/parties.collection';

@Injectable()
export class PartiesDataService {
  private data : Mongo.Cursor<Party>;

  constructor() {
    this.data = Parties.find({});
  }

  public getData() : Mongo.Cursor<Party> {
    return this.data;
  }
}
