import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    // Kullanıcının oturum durumunu kontrol et
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser; // Oturum durumu true/false olarak döner
  }
  

  logout(): void {
    // Oturum bilgisini local storage'dan sil
    localStorage.removeItem('currentUser');
    // Giriş sayfasına yönlendir
    this.router.navigate(['/giris']);
  }
}
