import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { kategoriler } from '../models/kategoriler';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  dataSource = new MatTableDataSource<kategoriler>();
  kategoriler: kategoriler = new kategoriler();
  displayedColumns: string[] = ['kullaniciAdi','actions'];


  constructor(private dataService: DataService, private dialog: MatDialog, private snackBar: MatSnackBar,private router: Router) { }

  @ViewChild('lessonDialog') lessonDialog!: TemplateRef<any>;
  @ViewChild('editLessonDialog') editLessonDialog!: TemplateRef<any>;

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser == "2") {
      alert("Yetkiniz yok haberler sayfasına yönlendiriliyorsunuz!")
      this.router.navigate(['/haberler']);
    }
    this.getKategoriler();

  }

  openDialog(): void {
    this.dialog.open(this.lessonDialog);
    this.getKategoriler();
  }

  addKategori() {
    this.dataService.postKategori(this.kategoriler).subscribe(
      response => {
        this.snackBar.open('Kategori başarıyla eklendi.', 'Kapat', {
          duration: 2000
        });
        this.dialog.closeAll();
         this.getKategoriler();
      },
      error => {
        console.error('Hata:', error);
      }
    );
  }

  
  getKategoriler(): void {
    this.dataService.getKategoriler().subscribe(
      (response) => {
        this.dataSource = new MatTableDataSource<kategoriler>(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openEditDialog(kullanici: kategoriler): void {
    this.kategoriler = { ...kullanici }; // Seçilen kullanıcıyı düzenlemek için mevcut kullanıcı bilgilerini atayalım
    this.dialog.open(this.editLessonDialog);
  }


  updateKategori() {
    if (this.kategoriler.id) { // id tanımlıysa güncelleme işlemini gerçekleştir
      this.dataService.putKategoriler(this.kategoriler.id, this.kategoriler).subscribe(
        response => {
          this.snackBar.open('Kullanıcı başarıyla güncellendi.', 'Kapat', {
            duration: 2000
          });
          this.dialog.closeAll();
          this.getKategoriler(); // Kullanıcıları yeniden yükle
        },
        error => {
          console.error('Hata:', error);
        }
      );
    } else {
      console.error('Hata: Kullanıcı id tanımlı değil.'); // Hata durumunu ele al
    }
  }

  deleteKategori(id: number) {
    if (confirm('Dersi silmek istediğinize emin misiniz?')) {
      this.dataService.deleteKategori(id).subscribe(
        response => {
          console.log('Kategori silindi:', response);
          this.snackBar.open('Kategori başarıyla silindi.', 'Kapat', { duration: 2000 });
          this.getKategoriler();
        },
        error => {
          console.error('Hata:', error);
        }
      );
    }
  }

}
