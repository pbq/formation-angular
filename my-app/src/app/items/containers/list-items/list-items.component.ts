import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/models/item.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit /*, OnDestroy*/ {

  /* sub: Subscription; */

  constructor(private collectionService: CollectionService) { }

  collection: Observable<Item[]>;

  ngOnInit() {
    this.collection = this.collectionService.collection; // ici on accede au get collection du collection service

    /* MAUVAISE PRATIQUE POUR LA GESTION DES SOUSCRIPTIONS
    this.sub = this.collectionService.collection.subscribe((data) => {
      this.collection.push(data);
    })
    */
  }

  /* MAUVAISE PRATIQUE POUR LA GESTION DES SOUSCRIPTIONS
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  */

}
