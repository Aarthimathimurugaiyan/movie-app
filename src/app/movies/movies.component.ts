import { Component, OnInit, inject } from '@angular/core';
import { MoviecardsComponent } from '../moviecards/moviecards.component';
import { CommonModule } from '@angular/common';
import { MovieapiService  } from '../movieapi.service';
import { Genre, Movielistdata } from '../moviedetailsdata';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MoviecardsComponent,CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
 movieservice: MovieapiService= inject(MovieapiService);
 movies: Movielistdata[]=[];
 filterdata: Movielistdata[]=[];
 genres: Genre[] = [];
  genre: Number = 0; 
 ngOnInit(): void {
   this.movieservice.getMovies().subscribe((data)=>{
    this.movies=data.results;
    this.filterdata=this.movies;

   })
   this.movieservice.getGenres().subscribe((data) => {
    this.genres = data.genres; // Adjust based on your API response
  });
 }
 filterResults(text: String){
  console.log(text);
  if(!text){
    this.filterdata=this.movies;
    return;
  }
  this.filterdata=this.movies.filter((
    m
  )=>
    m.original_title.toLowerCase().includes(text.toLowerCase())
  
)
 }
 onGenreClick(genreId: number): void {
  console.log('genreId', genreId);

  this.genre = genreId;
  if (genreId === 0) {
    this.filterdata = this.movies;
    return;
  }
  this.movieservice.getMovies(this.genre).subscribe((data) => {
    this.filterdata = data.results;
  });
}
}

