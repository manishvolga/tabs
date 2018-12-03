import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
const routes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'tab2', component: TabsComponent },
  { path: 'tab1', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
