import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {ExpenditureListComponent} from "./components/expenditures/list/expenditure-list.component";
import {ExpenditureDetailsComponent} from "./components/expenditures/details/expenditure-details.component";
import {AddExpenditureComponent} from "./components/expenditures/add/add-expenditure.component";
import {ExpenditureEditComponent} from "./components/expenditures/edit/expenditure-edit.component";
import {CategoriesComponent} from "./components/categories/list/categories.component";

const routes: Routes = [
  {path: 'expenditures', component: ExpenditureListComponent},
  {path: 'expenditures/:expenditureId', component: ExpenditureDetailsComponent},
  {path: 'expenditures/add', component: AddExpenditureComponent},
  {path: 'expenditures/edit', component: ExpenditureEditComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'categories', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
