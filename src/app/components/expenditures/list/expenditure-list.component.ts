import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenditure-list',
  templateUrl: './expenditure-list.component.html',
  styleUrls: ['./expenditure-list.component.scss']
})
export class ExpenditureListComponent implements OnInit {
  expenditures = [
    {
      id: 1,
      name: 'Электричество + вода',
      date: '12.01.2022',
      category: 'Коммунальные платежи',
      amount: 2500,
    },
    {
      id: 2,
      name: 'Продукты',
      date: '20.01.2022',
      category: 'Продукты',
      amount: 1200,
    },
    {
      id: 3,
      name: 'Полки в комнату',
      date: '05.09.2021',
      category: 'Бытовые нужды',
      amount: 6000,
    },
    {
      id: 4,
      name: 'Хаб для USB',
      date: '13.11.2021',
      category: 'Электроника и техника',
      amount: 550,
    },
    {
      id: 5,
      name: 'Закупка в Леонардо',
      date: '25.01.2022',
      category: 'Хобби',
      amount: 3500,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
