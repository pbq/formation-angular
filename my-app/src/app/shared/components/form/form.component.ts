import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  public libelles = Object.values(State);

  @Output() newItem: EventEmitter<Item> = new EventEmitter<Item>(); // Observable chaud

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      // validators.compose pour pouvoir mettre plusieurs validateurs
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      reference: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      state: State.ALIVRER
    });
  }

  process(): void {
    this.newItem.emit(this.form.value); // envoi des données du composant fils au composant parent
  }

  isInvalide(champs: string): boolean {
    return this.form.get(champs).invalid && this.form.get(champs).touched;
  }

}
