import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories = [
    {
      id: 1,
      name: 'Коммунальные платежи',
    },
    {
      id: 2,
      name: 'Продукты',
    },
    {
      id: 3,
      name: 'Бытовые нужды',
    },
    {
      id: 4,
      name: 'Электроника и техника',
    },
    {
      id: 5,
      name: 'Хобби',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
