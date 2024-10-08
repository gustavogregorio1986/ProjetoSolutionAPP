import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeroportoService {

  private apiUrl = 'https://localhost:7094/api/aeroportos'; 

  constructor(private http: HttpClient) { }

  getAeroportos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/aeroportos`);
  }
}
