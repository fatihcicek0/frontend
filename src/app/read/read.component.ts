import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiserviceService} from '../apiservice.service'
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
   readData:any;
  ngOnInit(): void {
   this.getAllData();
  }
 
 
  deleteID(id:any)
  {
    this.service.deleteData(id).subscribe((res)=>{
           this.getAllData();
    });
  }
  
 

  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,'resss====');
      this.readData=res.data;
     });
  }

}
