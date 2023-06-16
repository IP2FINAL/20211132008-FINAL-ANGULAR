import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { haberler } from '../models/haberler';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { kategoriler } from '../models/kategoriler';


@Component({
  selector: 'app-estate-advert',
  templateUrl: './estate-advert.component.html',
  styleUrls: ['./estate-advert.component.css']
})
export class EstateAdvertComponent {

  dataSource = new MatTableDataSource<haberler>();
  haberler: haberler = new haberler();
  kategoriler: kategoriler[] = [];


  displayedColumns: string[] = ["newsTitle","newsDetail","newsPhoto", "actions"];

  constructor(private dataService: DataService, private dialog: MatDialog, private snackBar: MatSnackBar,private router: Router) { }

  @ViewChild('lessonDialog') lessonDialog!: TemplateRef<any>;
  @ViewChild('editLessonDialog') editLessonDialog!: TemplateRef<any>;

  ngOnInit() {
    this.getHaberler();
    this.getKategoriler();
  }

  getKategoriler(): void {
    this.dataService.getKategoriler().subscribe(
      (response) => {
        this.kategoriler = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openDialog(): void {
    this.dialog.open(this.lessonDialog);
  }
  openEditDialog(kullanici: haberler): void {
    this.haberler = { ...kullanici }; // Seçilen kullanıcıyı düzenlemek için mevcut kullanıcı bilgilerini atayalım
    this.dialog.open(this.editLessonDialog);
  }

  getHaberler(): void {
    this.dataService.getHaberler().subscribe(
      (response) => {
        this.dataSource = new MatTableDataSource<haberler>(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addNews() {
    this.dataService.postNews(this.haberler).subscribe(
      response => {
        this.snackBar.open('Haber başarıyla eklendi.', 'Kapat', {
          duration: 2000
        });
        this.dialog.closeAll();
         this.getHaberler();
      },
      error => {
        console.error('Hata:', error);
      }
    );
  }




  updateNews() {
    if (this.haberler.id) { // id tanımlıysa güncelleme işlemini gerçekleştir
      this.dataService.putHaberler(this.haberler.id, this.haberler).subscribe(
        response => {
          this.snackBar.open('Kullanıcı başarıyla güncellendi.', 'Kapat', {
            duration: 2000
          });
          this.dialog.closeAll();
          this.getHaberler(); // Kullanıcıları yeniden yükle
        },
        error => {
          console.error('Hata:', error);
        }
      );
    } else {
      console.error('Hata: Kullanıcı id tanımlı değil.'); // Hata durumunu ele al
    }
  }

  deleteNews(id: number) {
    if (confirm('Dersi silmek istediğinize emin misiniz?')) {
      this.dataService.deleteNews(id).subscribe(
        response => {
          console.log('Kategori silindi:', response);
          this.snackBar.open('Kategori başarıyla silindi.', 'Kapat', { duration: 2000 });
          this.getHaberler();
        },
        error => {
          console.error('Hata:', error);
        }
      );
    }
  }



  

}
