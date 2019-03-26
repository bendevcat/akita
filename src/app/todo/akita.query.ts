import { QueryEntity } from '@datorama/akita';
import { AkitaStore, AkitaState, akitaStore } from './akita.store';
import { Akita } from './akita.model';

export class AkitaQuery extends QueryEntity<AkitaState, Akita> {

  constructor(protected store: AkitaStore) {
    super(store);
  }

}

export const akitaQuery = new AkitaQuery(akitaStore);
