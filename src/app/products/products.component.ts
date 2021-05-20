import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, Film } from '../shared/data/films.data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  films: Film[] = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
