import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {
  url:any='http://localhost:3000/posts'

  constructor(public obj:HttpClient) { }
  getdata():Observable<any>{
    return this.obj.get<any[]>(this.url);
    
  }
}
