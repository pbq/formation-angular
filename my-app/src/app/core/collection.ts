import { Item } from '../shared/models/item.model';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
  id: 'a1',
  name: 'pierre',
  reference : '1234',
  state: State.ALIVRER
},
{
  id: 'b1',
  name: 'Mohamed',
  reference : '2345',
  state: State.ENCOURS
},
{
  id: 'c1',
  name: 'Mary',
  reference : '3456',
  state: State.LIVREE
}
];
