import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryComponent } from './category/category.component';
import { EstateAdvertComponent } from './estate-advert/estate-advert.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthorityComponent } from './authority/authority.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { MatCardModule } from '@angular/material/card';
import { HaberComponent } from './haber/haber.component';


@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    CategoryComponent,
    HaberComponent,
    EstateAdvertComponent,
    LoginComponent,
    UsersComponent,
    AuthorityComponent,
    HeaderComponent,
    FooterComponent,
      HaberComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
