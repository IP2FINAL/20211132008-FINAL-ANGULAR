import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


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
