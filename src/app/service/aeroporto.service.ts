import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeroportoService {

  private apiUrl = 'https://localhost:7094/Api/Aeroportos'; 

  constructor(private http: HttpClient) { }

  cadastrarAeroporto(aeroporto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/AdicionarAeroporto`, aeroporto);
  }
  
  getAeroportos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ListarAeroportos`);
  }

  getAtivos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ListarAtivos`);
  }

  getInativos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ListarInativos`);
  }
}
