import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Cartes } from './cartes';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs/Rx';




@Injectable()

export class CarteService {
  carte: Cartes;
  carteListe: Observable<any>;
  items: FirebaseListObservable<any[]>;
  carteObs: any = {};

  constructor(private af: AngularFire) {

    this.items = af.database.list('cartes', {
      query: {
        orderByKey: true,
      }
    });

  }

  deleteItem(key: string) {
    this.items.remove(key);
  }
  getCarte(key: any) {

  }
}

