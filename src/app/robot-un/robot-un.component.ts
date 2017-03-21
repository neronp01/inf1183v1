import {
  Component,
  group,
  Input,
  animate,
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
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';




@Component({
  selector: 'app-robot-un',
  templateUrl: './robot-un.component.html',
  styleUrls: ['./robot-un.component.css'],
  animations: [
    trigger('flyInOut', [
      transition('inactive => active', [
        animate('1000ms ease-in', keyframes([
          style({ transform: 'translateY(0px)', offset: 0.7 }),
          style({ transform: 'translateX(0px)', offset: 0.7 }),
          style({ transform: 'translateY(1px)', offset: 0.7 }),
          style({ transform: 'translateX(1px)', offset: 0.7 }),
          style({ transform: 'translateY(2px)', offset: 0.7 }),
          style({ transform: 'translateX(2px)', offset: 0.7 }),
          style({ transform: 'translateY(3px)', offset: 0.7 }),
          style({ transform: 'translateX(3px)', offset: 0.7 }),
          style({ transform: 'translateY(4px)', offset: 0.7 }),
          style({ transform: 'translateX(4px)', offset: 0.7 }),
          style({ transform: 'translateY(5px)', offset: 0.7 }),
          style({ transform: 'translateX(5px)', offset: 0.7 }),
          style({ transform: 'translateY(6px)', offset: 0.7 }),
          style({ transform: 'translateX(6px)', offset: 0.7 }),
          style({ transform: 'translateY(7px)', offset: 0.7 }),
          style({ transform: 'translateX(7px)', offset: 0.7 }),
          style({ transform: 'translateY(8px)', offset: 0.7 }),
          style({ transform: 'translateX(8px)', offset: 0.7 }),
          style({ transform: 'translateY(9px)', offset: 0.7 }),
          style({ transform: 'translateX(9px)', offset: 0.7 }),
          style({ transform: 'translateX(10px)', offset: 0.7 }),
          style({ transform: 'translateY(10px)', offset: 0.7 }),
          style({ transform: 'translateY(9px)', offset: 0.7 }),
          style({ transform: 'translateX(9px)', offset: 0.7 }),
          style({ transform: 'translateY(8px)', offset: 0.7 }),
          style({ transform: 'translateX(8px)', offset: 0.7 }),
          style({ transform: 'translateY(7px)', offset: 0.7 }),
          style({ transform: 'translateX(7px)', offset: 0.7 }),
          style({ transform: 'translateY(6px)', offset: 0.7 }),
          style({ transform: 'translateX(6px)', offset: 0.7 }),
          style({ transform: 'translateY(5px)', offset: 0.7 }),
          style({ transform: 'translateX(5px)', offset: 0.7 }),
          style({ transform: 'translateY(4px)', offset: 0.7 }),
          style({ transform: 'translateX(4px)', offset: 0.7 }),
          style({ transform: 'translateY(3px)', offset: 0.7 }),
          style({ transform: 'translateX(3px)', offset: 0.7 }),
          style({ transform: 'translateY(2px)', offset: 0.7 }),
          style({ transform: 'translateX(2px)', offset: 0.7 }),
          style({ transform: 'translateY(1px)', offset: 0.7 }),
          style({ transform: 'translateX(1px)', offset: 0.7 }),
          style({ transform: 'translateY(0px)', offset: 0.7 }),
          style({ transform: 'translateX(0px)', offset: 0.7 }),

        ]))
      ]),
      transition('active => inactive', [
        animate('1000ms ease-in', keyframes([
          style({ transform: 'translateX(10px)', offset: 0.7 }),
          style({ transform: 'translateY(10px)', offset: 0.7 }),
          style({ transform: 'translateX(9px)', offset: 0.7 }),
          style({ transform: 'translateY(9px)', offset: 0.7 }),
          style({ transform: 'translateX(8px)', offset: 0.7 }),
          style({ transform: 'translateY(8px)', offset: 0.7 }),
          style({ transform: 'translateX(7px)', offset: 0.7 }),
          style({ transform: 'translateY(7px)', offset: 0.7 }),
          style({ transform: 'translateX(6px)', offset: 0.7 }),
          style({ transform: 'translateY(6px)', offset: 0.7 }),
          style({ transform: 'translateX(5px)', offset: 0.7 }),
          style({ transform: 'translateY(5px)', offset: 0.7 }),
          style({ transform: 'translateX(4px)', offset: 0.7 }),
          style({ transform: 'translateY(4px)', offset: 0.7 }),
          style({ transform: 'translateX(3px)', offset: 0.7 }),
          style({ transform: 'translateY(3px)', offset: 0.7 }),
          style({ transform: 'translateX(2px)', offset: 0.7 }),
          style({ transform: 'translateY(2px)', offset: 0.7 }),
          style({ transform: 'translateX(1px)', offset: 0.7 }),
          style({ transform: 'translateY(1px)', offset: 0.7 }),
          style({ transform: 'translateX(0px)', offset: 0.7 }),
          style({ transform: 'translateY(0px)', offset: 0.7 }),
        ]))
      ]),

    ]),

    trigger('rotate', [
      transition('inactive => active', [
        animate('1000ms ease-in', keyframes([
          style({ transform: 'rotate(0deg)', offset: 0.7 }),
          style({ transform: 'rotate(5deg)', offset: 0.7 }),
        ]))
      ]),


    ]),
    trigger('enter', [
      state('void', style({ transform: 'translateY(600px)', offset: 0.7 })),
      transition('void => in', [

        animate('1000ms ease-in', keyframes([
          style({ transform: 'translateY(-115px)', offset: 0.7 }),
 style({ transform: 'translateY(200px)', offset: 0.7 }),
          style({ transform: 'translateY(0px)', offset: 0.7 }),


        ]))
      ]),


    ])

  ]
})
export class RobotUnComponent implements OnInit {
  state: string = "void";

  constructor() { }

  ngOnInit() {
    this.state = "in";
    this.timerAnimation();
  }
  timerAnimation() {

    let timer = Observable.interval(1000);
    timer.subscribe(
      x => {
        let prob: number = this.getRandomInt(1, 100);
        if (prob > 60) {
          if (this.state === "inactive" || this.state === "in") {
            this.state = "active"
          } else {
            this.state = "inactive"
          }
        }
       // console.log(prob);

      }
    );

  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
