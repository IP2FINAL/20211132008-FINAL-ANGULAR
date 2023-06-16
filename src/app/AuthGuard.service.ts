import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Kullanıcı oturum durumunu kontrol et
    if (this.isLoggedIn()) {
      // Kullanıcının rolünü kontrol et
      if (this.hasAccess()) {
        return true; // Sayfaya giriş izni ver
      } else {
        this.router.navigate(['/yetkiyok']); // Yetkisiz erişim sayfasına yönlendir
        return false; // Sayfaya giriş izni yok
      }
    } else {
      this.router.navigate(['/giris']); // Oturum açma sayfasına yönlendir
      return false; // Sayfaya giriş izni yok
    }
  }

  isLoggedIn(): boolean {
    // Kullanıcının oturum durumunu kontrol et
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser; // Oturum durumu true/false olarak döner
  }

  hasAccess(): boolean {
    // Kullanıcının yetkilendirme düzeyini kontrol et
    const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '');
    console.log(currentUser);
    const userRole = currentUser; // Kullanıcının rolünü al
    // Yetkilendirme mantığını burada gerçekleştir
    // Örneğin, belirli rollerin hangi sayfalara erişebileceğini kontrol et
    if (userRole == "1") {
      return true; // Yetkili rolüne sahip kullanıcıya her sayfaya giriş izni ver
    } else if (userRole == "2") {
        // const allowedPages = ['haberler']; // Kullanıcının erişebileceği sayfaların listesi
        // // Eğer kullanıcının erişmeye çalıştığı sayfa, allowedPages dizisinde varsa true döndür
        // if (allowedPages.includes(this.getCurrentPage())) {
        //     console.log("haberler");
        //   return true;
        // }
        // console.log(allowedPages.includes(this.getCurrentPage()))
        return true;
    }
    else{
        console.log("Yetkisiz erişim");
    }
    return false; // Yetkisiz erişim
  }


  getCurrentPage(): string {
    // Sayfanın URL'sini analiz ederek mevcut sayfanın adını döndür
    const url = window.location.href;
    const lastSlashIndex = url.lastIndexOf('/');
    const currentPage = url.substring(lastSlashIndex + 1);
    return currentPage;
  }
}
