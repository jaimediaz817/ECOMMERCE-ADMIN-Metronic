import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';


@NgModule({
  declarations: [CategoryComponent, CategoryListComponent, AddCategoryComponent, EditCategoryComponent, DeleteCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
