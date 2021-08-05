import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'api-key':'610644b1eba3e'})
};
const apiUrl = "https://t-gadgetcors.herokuapp.com/https://inventori-api.herokuapp.com/barang";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  Get_Data(type): Observable<any> {
    return this.http.get(`${apiUrl}/${type}`,httpOptions);
  }

  Post_Data(type,data): Observable<any>{
    return this.http.post(`${apiUrl}/${type}`, data, httpOptions);
  }

  Put_Data(type,data): Observable<any>{
    return this.http.put(`${apiUrl}/${type}`, data, httpOptions);
  }
}
