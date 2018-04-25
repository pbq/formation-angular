import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit() {
  }

  add(item: Item) {
    console.log('recuperation item depuis l\'enfant', item);
    // appel addItem de collectionservice
    // redirection
  }
}
