import { Component, OnInit, inject } from '@angular/core';
import { MoviecardsComponent } from '../moviecards/moviecards.component';
import { CommonModule } from '@angular/common';
import { MovieapiService } from '../movieapi.service';
import { Movielistdata } from '../movielistdata';

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
 ngOnInit(): void {
   this.movieservice.getMovies().subscribe((data)=>{
    this.movies=data.results;
    this.filterdata=this.movies;
   })
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
    m?.original_title.toLowerCase().includes(text.toLowerCase())
  
)
 }
}
