import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { ListaUserComponent } from './lista-user/lista-user.component';

const routes: Routes = [
  {path: 'lista', component: ListaComponent},
  {path: 'usuarios', component: ListaUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
