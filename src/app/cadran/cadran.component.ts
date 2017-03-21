import {
  Component, OnInit, group,
  Input,
  animate,
  keyframes,
  Provider,
  state,
  transition,
  trigger,
  style,
  Output,
  EventEmitter
} from '@angular/core';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-cadran',
  templateUrl: './cadran.component.html',
  styleUrls: ['./cadran.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0%)' })),
      state('void', style({ opacity: 1, transform: 'translateY(20%)' })),
      state('out', style({ opacity: 1, transform: 'translateY(-20%)' })),
      transition('in => out', animate('180ms ease-in')),
      transition('void => in', animate('180ms ease-in')),
    ]
    )]
})
export class CadranComponent implements OnInit {
  pointDebut: number = 4;
  pointFin: number = 30;
  unite: number = 0;
  dizaine: number = 0;
  state = ["", ""];

  //image ou pointage
  affichage: string = "pointage";
  constructor() { }

  ngOnInit() {
    this.timerAnimation();
  }
  timerAnimation() {


    let iterationTotal = this.pointFin - this.pointDebut;
    let iteration = Observable.interval(1000).take(iterationTotal);
    iteration.subscribe(
      x => {
        let unite = (x + this.pointDebut) % 10;
        let diziane = Math.floor((x + this.pointDebut) * .1);
        this.dizaine = diziane;
        this.unite = unite;
        let timer = Observable.timer(900, 300)
          .timeInterval().take(3);
        timer.subscribe(
          x => {
            if (x.value === 1) {
              if (unite === 9) { this.state[1] = "void"; }
              this.state[0] = "void";
              console.log(x.value);
            }
            else if (x.value === 2) {
              if (unite === 9) { this.state[1] = "in"; }
              this.state[0] = "in";
              console.log("in");
            } else {
               if (unite === 9) { this.state[1] = "out"; }
              this.state[0] = "out"
              console.log("out");
            }
          }
        )
      }

    )


      ;

  }
}
