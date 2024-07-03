import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movielistdata } from './movielistdata';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {
  constructor(private http: HttpClient) { }
  getMovies(): Observable<any>{
    var apiUrl = 'https://api.themoviedb.org/3/discover/movie'; 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDczMzcyNjFlYWI4OTQ4ZmM4OGQyNGM0MmJlZGZjMyIsIm5iZiI6MTcxOTkzMDU0Mi40MDE0NzYsInN1YiI6IjY2N2VmMTNlODEwOGFjNDQ5NzAwNzUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uyxLGBamCxaPaLWYbwPG0NJrbG8C1EeBQP-CxVXlEB4',
    });
    var res = this.http.get(apiUrl,{headers});
    console.log(res);
    return res;
  }
  fetchMovieById(id: number): Observable<any> {
    var url = ' https://api.themoviedb.org/3/movie/' + id;
    // need to addd bear token in header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDczMzcyNjFlYWI4OTQ4ZmM4OGQyNGM0MmJlZGZjMyIsIm5iZiI6MTcxOTkzMDU0Mi40MDE0NzYsInN1YiI6IjY2N2VmMTNlODEwOGFjNDQ5NzAwNzUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uyxLGBamCxaPaLWYbwPG0NJrbG8C1EeBQP-CxVXlEB4',
    });
    return this.http.get(url, { headers });

  }
  }

