import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserSearchComponent } from './components/user-search/user-search.component';


const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'search', component: UserSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
