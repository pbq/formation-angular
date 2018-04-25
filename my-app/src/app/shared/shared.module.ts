import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { StateDirective } from './directives/state.directive';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    ItemComponent,
    NavComponent,
    StateDirective,
    FormComponent
  ],
  exports: [
    ItemComponent,
    NavComponent,
    FormComponent
  ]
})
export class SharedModule { }
