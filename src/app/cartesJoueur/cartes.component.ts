
import { Component, OnInit, Input, AfterViewInit, trigger, state, style, transition, animate, group, keyframes } from '@angular/core';
import { Cartes } from './cartes';
import { CarteService } from './carte.service';
import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'app-cartes',
  templateUrl: './cartes.component.html',
  styleUrls: ['./cartes.component.css'],
 })
export class CartesComponent implements OnInit {
  @Input() carte: Cartes;

  constructor() {}


  ngOnInit() {

  }


}
