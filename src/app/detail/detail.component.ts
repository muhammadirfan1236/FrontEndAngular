import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../_Files/data.json';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public personid:any;
  public mydata: any;
  constructor(private route: ActivatedRoute) { }
  dataList: {
    id:number, name: String, academic_degree: String,contract:Boolean, profession: String,
  available:String,research_line:String,keywords:String}[] = data;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.personid = Number(id);
    this.mydata = this.dataList.filter(x => x.id === this.personid);
    console.log(this.mydata[0].keywords);
  }

}
