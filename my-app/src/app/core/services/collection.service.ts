import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/item.model';
import { COLLECTION } from '../collection';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {

  private _collection: Observable<Item[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this.collection = this.itemsCollection.valueChanges();
  }

  // get collection natif
  get collection(): Observable<Item[]> {
    return this._collection;
  }

  // set collection natif
  set collection(col: Observable<Item[]>) {
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
