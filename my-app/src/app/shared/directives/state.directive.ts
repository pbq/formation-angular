import { Directive, Input, OnInit, OnChanges, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: State;
  @HostBinding('class') nomClass: string;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.appState);
    this.nomClass = this.formaterEtat(this.appState);
  }

  // supprimer accents
  supprimerAccents(etat: string): string {
    return etat.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // supprimer espaces et mise en minuscules
  formaterEtat(etat: string): string {
    return `state-${this.supprimerAccents(etat).toLowerCase().replace(' ', '')}`;
  }

}
