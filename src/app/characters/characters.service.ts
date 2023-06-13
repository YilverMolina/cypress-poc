import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharactersResponse } from '../shared/models/characters-response';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>('https://rickandmortyapi.com/api/character');
  }
}
