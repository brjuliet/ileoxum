import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentosService {

  constructor(private http: HttpClient) { }

  private readonly API = "http://localhost:3000/"


  getGuias(){
    return this.http.get<any>(this.API + `usuarios`);
  }


  postGira(body: any){
    return this.http.post<any>(this.API + `giras`, body).pipe(take(1));
  }

  getAtendimentos(){
    return this.http.get<any>(this.API + `giras`);
  }

  remove(id: number){
    return this.http.delete(`${this.API}giras/${id}`).pipe(take(1));;
  }

}
