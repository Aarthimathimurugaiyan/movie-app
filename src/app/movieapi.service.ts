import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {
  constructor(private http: HttpClient) { }
  getMovies(genre?: Number): Observable<any> {
    var apiUrl = 'https://api.themoviedb.org/3/discover/movie'; // Replace with your API URL

    if (genre !== 0 && genre !== undefined) {
      console.log('genre', genre);

      apiUrl += '?with_genres=' + genre;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDczMzcyNjFlYWI4OTQ4ZmM4OGQyNGM0MmJlZGZjMyIsIm5iZiI6MTcyMDA3NDQ3Mi4wNjAyMzYsInN1YiI6IjY2N2VmMTNlODEwOGFjNDQ5NzAwNzUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iMRR6QgmWLM324kSWFwkvdxBKnbKzWsw8Do00-kt-E',
    });
    var res = this.http.get(apiUrl, { headers });
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
  getGenres(): Observable<any> {
    var apiUrl = 'https://api.themoviedb.org/3/genre/movie/list'; // Replace with your API URL
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDczMzcyNjFlYWI4OTQ4ZmM4OGQyNGM0MmJlZGZjMyIsIm5iZiI6MTcyMDA3NDQ3Mi4wNjAyMzYsInN1YiI6IjY2N2VmMTNlODEwOGFjNDQ5NzAwNzUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iMRR6QgmWLM324kSWFwkvdxBKnbKzWsw8Do00-kt-E',
    });
    var res = this.http.get(apiUrl, { headers });
    console.log(res);
    return res;
  }
  }


