import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserViewComponent } from './components/user-view/user-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserSearchComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'users/:userKey', component: UserViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
