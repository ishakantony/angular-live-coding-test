import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Add your code for getting films here

@Injectable({ providedIn: 'root' })
export class FilmService {
  constructor(private httpClient: HttpClient) {}
}
