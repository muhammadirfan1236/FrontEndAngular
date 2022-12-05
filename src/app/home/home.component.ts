import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../_Files/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router) { }
  dataList: {
    id:Number, name: String, academic_degree: String,contract:Boolean, profession: String,
  available:String,research_line:String,keywords:String}[] = data;
  ngOnInit(): void {
  }
  onSelect(item:any){
    this.router.navigate(['/detail',item.id])
  }
}
