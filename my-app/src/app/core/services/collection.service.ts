import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/item.model';
import { COLLECTION } from '../collection';

@Injectable()
export class CollectionService {

  private _collection: Item[]; // _collection pour le fonctionnement des accesseurs en natif

  constructor() {
    this.collection = COLLECTION;
  }

  // get collection natif
  get collection(): Item[] {
    return this._collection;
  }

  // set collection natif
  set collection(col: Item[]) {
    this._collection = col;
  }

  // get item by id
  getCollectionById(id: string): Item[] {
    return null;
  }

  // update item
  updateItem(item: Item) {

  }

  // delete item

  // create item

}
