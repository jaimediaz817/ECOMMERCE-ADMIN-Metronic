import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  
    children: [
      {
        path: 'list',
        component: CategoryListComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
      },
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
