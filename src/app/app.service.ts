import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModel } from './app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public CalculatePercentage(value: number): Observable<AppModel> {
    return this.http.get<AppModel>(`http://168.75.82.21:81/api/conta?valor=${value}`)
  }
}
