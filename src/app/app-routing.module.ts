import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{ path: "", redirectTo: "app-navbar" , pathMatch: "full" },
{ path: "listProvider", component: ListProviderComponent , canActivate: [AuthGaurdService] },
{ path: "addProvider", component: AddProviderComponent , canActivate: [AuthGaurdService] },
{ path: "updateProvider/:id", component: UpdateProviderComponent , canActivate: [AuthGaurdService] },
//{ path: "**", component: PageNotFoundComponent}
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent , canActivate: [AuthGaurdService] },
{ path: 'registration', component: RegistrationComponent },

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {
    
}