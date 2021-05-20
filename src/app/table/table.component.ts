import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from '../shared/data/films.data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'director', 'producer'];

  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
