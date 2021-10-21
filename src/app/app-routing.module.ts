import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjaxgetComponent } from './components/ajaxget/ajaxget.component';
import { AjaxpostComponent } from './components/ajaxpost/ajaxpost.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "ajaxGet",
    component: AjaxgetComponent
  },
  {
    path: "ajaxPost",
    component: AjaxpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
