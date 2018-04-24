import { Component, OnInit } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public libelles = Object.values(State);

  public newItem: Item;

  constructor(private collectionService: CollectionService,
  private router: Router) { }

  ngOnInit() {
    this.initItem();
  }

  initItem(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER
    };
  }

  reset(): void {
    this.initItem();
  }

  process(): void {
    console.log(this.newItem);
    this.collectionService.collection.push(this.newItem);
    this.reset();
    this.router.navigate(['/list']);
  }
}
