import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { kullanicilar } from './models/kullanicilar';
import { kategoriler } from './models/kategoriler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7022/api/'; // API'nin URL'si
  dataSource: any;

  constructor(private http: HttpClient) { }

  getKulanicilar(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'kullanicilars');
  }


  postKullanicilar(kullanici: kullanicilar): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'kullanicilars', kullanici);
  }


  putKullanicilar(id: number, kullanici: kullanicilar): Observable<any> {
    const url = `${this.apiUrl}kullanicilars/${id}`;
    return this.http.put<any>(url, kullanici);
  }
  
  deleteKullanicilar(id: number): Observable<any> {
    const url = `${this.apiUrl}kullanicilars/${id}`;
    return this.http.delete(url);
  }






  getKategoriler(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'kategorilers');
  }


  postKategori(kullanici: kullanicilar): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'kategorilers', kullanici);
  }


  putKategoriler(id: number, kullanici: kategoriler): Observable<any> {
    const url = `${this.apiUrl}kategorilers/${id}`;
    return this.http.put<any>(url, kullanici);
  }

  deleteKategori(id: number): Observable<any> {
    const url = `${this.apiUrl}kategorilers/${id}`;
    return this.http.delete(url);
  }









  getHaberler(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'news');
  }

  getHaberById(id:number){
    const url = `${this.apiUrl}news/${id}`;
    return this.http.get<any>(url);
  }

  gettHaberById(id:number){
    return this.http.get(`${this.apiUrl}news/${id}`);
  }
  postNews(kullanici: kullanicilar): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'news', kullanici);
  }
  putOkunduHaberler(okundu:number): Observable<any> {
    const url = `${this.apiUrl}news`;
    return this.http.put<any>(url, okundu);
  }

  putHaberler(id: number, kullanici: kategoriler): Observable<any> {
    const url = `${this.apiUrl}news/${id}`;
    return this.http.put<any>(url, kullanici);
  }

  deleteNews(id: number): Observable<any> {
    const url = `${this.apiUrl}news/${id}`;
    return this.http.delete(url);
  }



  // updateLesson(lesson: any): Observable<any> {
  //   const url = `${this.apiUrl}lessons/${lesson.id}`;
  //   return this.http.put<any>(url, lesson);
  // }
  // deleteLesson(id: number): Observable<any> {
  //   const url = `${this.apiUrl}lessons/${id}`;
  //   return this.http.delete(url);
  // }

  // //Dersler End

  // getStudent(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl + 'users');
  // }
  
  // postStudent(user: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl + 'users/student', user);
  // }

  // deleteStudent(id: number): Observable<any> {
  //   const url = `${this.apiUrl}users/${id}`;
  //   return this.http.delete(url);
  // }


  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}kullanicilars/login`;
    const body = { userName: username, password: password };
    return this.http.post<any>(url, body);
  }
  


}
