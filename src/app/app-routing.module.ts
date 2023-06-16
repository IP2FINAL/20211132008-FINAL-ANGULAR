import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { EstateAdvertComponent } from './estate-advert/estate-advert.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './AuthGuard.service';
import { UsersComponent } from './users/users.component';
import { AuthorityComponent } from './authority/authority.component';
import { HaberComponent } from './haber/haber.component';

// import { HomeComponent } from './home.component';
// import { AboutComponent } from './about.component';
// import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kategoriler', component: CategoryComponent, canActivate: [AuthGuard] },
  { path: 'haberler', component: EstateAdvertComponent, canActivate: [AuthGuard] },
  { path: 'news/:id', component: HaberComponent },
  { path: 'kullanicilar', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'yetkiyok', component: AuthorityComponent },
  { path: 'giris', component: LoginComponent },
  // { path: 'contact', component: ContactComponent },
  // Diğer yönlendirmeler
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
