import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getColorListData(){
    // const headers = { 'content-type': 'application/json'}
    return this.http.get(environment.endpoint+'/color-list' )
  }

  vote(id: number){
    let body = {id : id}
    return this.http.put<any>(environment.endpoint+'/vote/'+id, body );

  }
}
