import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AeroportoService {

  private apiUrl = 'https://seuapi.com/api/aeroportos'; 

  constructor(private http: HttpClient) { }


}
