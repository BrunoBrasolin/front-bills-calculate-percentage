import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModel } from './app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatePercentageService {

  constructor(private http: HttpClient) { }

  public CalculatePercentage(value: number): Observable<AppModel> {
    return this.http.get<AppModel>(`https://localhost:32768/api/conta?valor=${value}`)
  }
}
