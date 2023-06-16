import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private dataService: DataService) {}

 
  onLoginSubmit(): void {
    // Kullanıcı adı ve şifreyi kontrol etmek için API'ye istek gönder
    this.dataService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Başarılı giriş durumunda oturum bilgisini local storage'a kaydet
        localStorage.setItem('currentUser', JSON.stringify(response));
        console.log('Giriş başarılı:', response);
        // Ana sayfaya yönlendir
        this.router.navigate(['/kullanicilar']);
      },
      (error: any) => {
        alert("Kullanıcı adı veya şifre hatalı");
      }
    );
  }
}
