import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { kullanicilar } from '../models/kullanicilar';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSource = new MatTableDataSource<kullanicilar>();
  kullanicilar: kullanicilar = new kullanicilar();
  displayedColumns: string[] = ['kullaniciAdi', 'kullanicininAdi','actions'];


  constructor(private dataService: DataService, private dialog: MatDialog, private snackBar: MatSnackBar,private router: Router) { }


  @ViewChild('lessonDialog') lessonDialog!: TemplateRef<any>;
  @ViewChild('editLessonDialog') editLessonDialog!: TemplateRef<any>;

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser == "2") {
      alert("Yetkiniz yok haberler sayfasına yönlendiriliyorsunuz!")
      this.router.navigate(['/haberler']);
    }

    this.getKullanicilars();

  }

  openDialog(): void {
    this.dialog.open(this.lessonDialog);
    this.getKullanicilars();
  }

  addKullanici() {
    this.dataService.postKullanicilar(this.kullanicilar).subscribe(
      response => {
        this.snackBar.open('Kullanıcı başarıyla eklendi.', 'Kapat', {
          duration: 2000
        });
        this.dialog.closeAll();
        // this.getLessons();
      },
      error => {
        console.error('Hata:', error);
      }
    );
  }

  
  getKullanicilars(): void {
    this.dataService.getKulanicilar().subscribe(
      (response) => {
        this.dataSource = new MatTableDataSource<kullanicilar>(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openEditDialog(kullanici: kullanicilar): void {
    this.kullanicilar = { ...kullanici }; // Seçilen kullanıcıyı düzenlemek için mevcut kullanıcı bilgilerini atayalım
    this.dialog.open(this.editLessonDialog);
  }


  updateKullanici() {
    if (this.kullanicilar.id) { // id tanımlıysa güncelleme işlemini gerçekleştir
      this.dataService.putKullanicilar(this.kullanicilar.id, this.kullanicilar).subscribe(
        response => {
          this.snackBar.open('Kullanıcı başarıyla güncellendi.', 'Kapat', {
            duration: 2000
          });
          this.dialog.closeAll();
          this.getKullanicilars(); // Kullanıcıları yeniden yükle
        },
        error => {
          console.error('Hata:', error);
        }
      );
    } else {
      console.error('Hata: Kullanıcı id tanımlı değil.'); // Hata durumunu ele al
    }
  }
  deleteUsers(id: number) {
    if (confirm('Dersi silmek istediğinize emin misiniz?')) {
      this.dataService.deleteKullanicilar(id).subscribe(
        response => {
          console.log('Kategori silindi:', response);
          this.snackBar.open('Kategori başarıyla silindi.', 'Kapat', { duration: 2000 });
          this.getKullanicilars();
        },
        error => {
          console.error('Hata:', error);
        }
      );
    }
  }
  
  


  
  



}