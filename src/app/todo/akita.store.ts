import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Akita } from './akita.model';

export interface AkitaState extends EntityState<Akita> {}

@StoreConfig({ name: 'akita' })
export class AkitaStore extends EntityStore<AkitaState, Akita> {

  constructor() {
    super();
  }

}

export const akitaStore = new AkitaStore();

