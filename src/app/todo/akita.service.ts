import { ID } from '@datorama/akita';
import { AkitaStore, akitaStore } from './akita.store';

export class AkitaService {

  constructor(private akitaStore: AkitaStore) {
  }

}

export const akitaService = new AkitaService(akitaStore);