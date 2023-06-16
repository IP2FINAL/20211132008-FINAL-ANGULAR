import { Component } from '@angular/core';
import { haberler } from '../models/haberler';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  haberler: haberler[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getHaberler();
  }


  getHaberler(): void {
    this.dataService.getHaberler().subscribe(
      (response) => {
        this.haberler = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
