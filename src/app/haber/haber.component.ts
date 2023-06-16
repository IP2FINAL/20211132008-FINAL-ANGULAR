import { Component, OnInit } from '@angular/core';
import { haberler } from '../models/haberler';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-haber',
  templateUrl: './haber.component.html',
  styleUrls: ['./haber.component.css']
})
export class HaberComponent implements OnInit {
  id!: number;
  haber!: haberler;
  okundu !: number;
  /* yorumlar!: Yorum[]; */

    
  constructor(
    public api: DataService,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p=>{
      if (p['id']){
        this.id = p['id'];
        this.getHaberById();

      }

    });
  }
  
  getHaberById(){
    this.api.gettHaberById(this.id).subscribe((d:any)=>{
      this.haber = d;
    });
  }
  // HaberOkunduYap(){
  //   this.haber.okundu += 1;
  //   this.api.putOkunduHaberler(this.okundu).subscribe();
  // }

}
