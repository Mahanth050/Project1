import { Component } from '@angular/core';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  jsondata:any[]=[];
  constructor(private serviceobj:ProjectserviceService){

  }
  ngOnInit(): void {
    this.serviceobj.getdata().subscribe((data)=>{
      this.jsondata = data;
    })

  }
  
}