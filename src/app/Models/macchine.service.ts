// src/app/models/macchine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMacchine } from './iMacchine';

@Injectable({
  providedIn: 'root'
})
export class MacchineService {

  private jsonUrl = 'assets/db.json';  // Assumi che il file JSON sia nella cartella assets

  constructor(private http: HttpClient) { }

  getMacchine(): Observable<IMacchine[]> {
    return this.http.get<IMacchine[]>(this.jsonUrl);
  }
}
