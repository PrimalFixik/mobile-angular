import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoriesComponent } from './components/categories/list/categories.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import {AddExpenditureComponent} from "./components/expenditures/add/add-expenditure.component";
import {ExpenditureListComponent} from "./components/expenditures/list/expenditure-list.component";
import {ExpenditureDetailsComponent} from "./components/expenditures/details/expenditure-details.component";
import {ExpenditureEditComponent} from "./components/expenditures/edit/expenditure-edit.component";
import {CategoryAddComponent} from "./components/categories/add/category-add.component";
import {CategoryEditComponent} from "./components/categories/edit/category-edit.component";
import {CategoryDetailsComponent} from "./components/categories/details/category-details.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriesComponent,
    AddExpenditureComponent,
    StatisticsComponent,
    ExpenditureListComponent,
    ExpenditureDetailsComponent,
    ExpenditureEditComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryDetailsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
