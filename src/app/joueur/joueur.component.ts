import { debounceTime } from 'rxjs/operator/debounceTime';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { timeInterval } from '@angular-cli/ast-tools/node_modules/rxjs/operator/timeInterval';
import { timeout } from '@angular-cli/ast-tools/node_modules/rxjs/operator/timeout';
import { ActivatedRoute } from '@angular/router';
import { TimeInterval } from '@angular-cli/ast-tools/node_modules/rxjs/Rx';
import {
  AfterViewInit,
  animate,
  Component,
  group,
  Input,
  keyframes,
  OnInit,
  Provider,
  state,
  transition,
  trigger,
  style,
  Output,
  EventEmitter

} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { CartesComponent } from '../cartesJoueur/cartes.component';
import { moveInLeft } from '../router.animations';
import { Observable } from 'rxjs/Rx';
import { Cartes } from '../cartesJoueur/cartes';
import { Subject } from 'rxjs/Subject';
import { flyIn } from '../router.animations';
import { CarteService } from '../cartesJoueur/carte.service';
import { TabInd } from './tabInd';


@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css'],
  providers: [CarteService],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1.0, transform: 'translateX(0)' })),
      transition('void => *', [
        //   style({ opacity: 0.0, transform: 'translateX(-100000%)' }),
        animate('1s 200ms ease-in')]),
      state('void', style({ opacity: 0.0 })),
      // state('loaded', style({ transform: 'scale(0)', opacity: 0.0, 'z-index': 1 })),/*,'margin': '20px',  'flex':'.00001 1000 0%'*/
      state('hover', style({
        position: 'fixed',
        transform: 'translateY(-40px) scale(3)',

      })),
      state('clignote', style({ opacity: 1 })),
      transition('in => clignote', [
        //   style({ opacity: 0.0, transform: 'translateX(-100000%)' }),
        animate('15000ms ease-in', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),


        ]))],
      ),

      transition('clignote =>hover', [
        animate('500ms ease-in-out')]),

      transition('hover => clignote', [
        animate('500ms ease-in-out')]),
      state('rest', style({
        opacity: 1.0, 'z-index': 3, height: '50px', width: '50px',
      })),/*'margin': '20px',  'flex':'1 1 100%','*/


      // state('selected', style({ transform: 'scale(2)', opacity: 1.0, 'z-index': 2, 'background-color': 'rgba(7,106,255,0.8)' })),
      //  state('flyout', style({ transform: 'scale(10)', opacity: 0.0, 'z-index': 2, 'background-color': 'rgba(7,106,255,0.8)' })),

    ])
  ]

})
export class JoueurComponent implements OnInit {
  @Output() cartejoue = new EventEmitter<string>();
  @Input() indTab = TabInd;
  hoverArray: Array<string> = new Array(13);
  items: FirebaseListObservable<any[]>;
  items2: FirebaseListObservable<any[]>;
  items3: FirebaseObjectObservable<any[]>;
  itemsScale: FirebaseListObservable<any[]>;
  count: number = 13;
  itemGenre: Observable<any>;
  private data: Observable<any>;
  trackFbObject = (idx, obj) => obj.$key;
  constructor(private af: AngularFire, private _items: CarteService) {
    this.items2 = this.af.database.list('/cartes', { preserveSnapshot: true });
    this.itemsScale = this.af.database.list('/cartes', { preserveSnapshot: true });
    this.items = _items.items;

  }
  selectionnerCarte(event) {
    console.log(event.path);
  }

  ngOnInit() {


 this.start();
  }
  pathCarte() { }

  start() {


    console.log('test');

    this.items2.take(1).subscribe(x => {
      x.forEach(
        y => {
          this.items3 = this.af.database.object('cartes/' + y.key);
          this.items3.update({ etat: 'in' });
        }
      )
    });
  }
  setEtat() {
    console.log("test");
    this.items2.subscribe(x => {
      x.forEach(y => {
        y.update({ etat: 'rest' })
      })
    })
  }
  nouvelItem(a: number) {
    this.data = new Observable(obs => {
      setTimeout(() => {
        obs.next('in');
      }, 1000);
      setTimeout(() => {
        obs.next('in');
      }, 2000)
    });

    let sub = this.data.subscribe(
      value => this.hoverArray[a] = value)
  }
  test2() {
    //  this.test();
    console.log("test");
  }
  jouerCarte(carte: Cartes, key: any) {
    let keyString: string = key + '';
    console.log(carte);
    this.cartejoue.emit(carte.path);
    this.items2.subscribe(x => {
      x.forEach(
        y => {
          // console.log(y.val().genre);
          if (y.val().path === carte.path) {
            console.log(Number(y.key));
            this.items.remove(y.key);
          }
        }
      )
    });
    this.count--;

  }
  over(_key: string, _etat: string) {

    if (_etat === 'clignote' || _etat === 'hover') {
      this.items3 = this.af.database.object('cartes/' + _key);
      this.items3.update({ etat: 'hover' });
      //this.updateEtat(_key, 'hover');
      console.log(_etat);
    }
  }
  out(_key: string, _etat: string) {
    if (_etat === 'hover') {
      this.items3 = this.af.database.object('cartes/' + _key);
      this.items3.update({ etat: 'clignote' });
    }

    //console.log(a)
  }

  ItemScale(a: string) {
    console.log(a);
    this.itemsScale.take(1).subscribe(x => {
      x.forEach(
        y => {
          console.log(y.val().genre);
          if (y.val().genre === a) {
            this.updateEtat(y.key, 'clignote');
          }
        }
      )
    })
    // this.setEtat();
  }
  updateEtat(_key: string, _etat: string) {

    this.items3 = this.af.database.object('cartes/' + _key);
    this.items3.update({ etat: _etat });
    //  console.log(_key);
  }


}
