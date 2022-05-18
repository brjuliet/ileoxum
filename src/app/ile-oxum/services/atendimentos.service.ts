import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentosService {




  constructor(private http: HttpClient) { }

  private readonly API = "http://localhost:3000/"
  private URL: string = environment.URL;




  getGuias(){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    });

    let httpOptions = {
      headers: headers
    };

    return this.http.get<any>(this.URL + `usuarios`, httpOptions);
  }


  postGira(body: any){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    });

    let httpOptions = {
      headers: headers
    };

    return this.http.post<any>(this.URL + `giras`, body).pipe(take(1));
  }

  getAtendimentos(){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    });

    let httpOptions = {
      headers: headers
    };

    return this.http.get<any>(this.URL + `giras`, httpOptions);
  }

  remove(id: number){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    });

    let httpOptions = {
      headers: headers
    };

    return this.http.delete(`${this.URL}giras/${id}`, httpOptions).pipe(take(1));;
  }

}
