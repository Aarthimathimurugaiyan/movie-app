import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { MovieapiService } from '../movieapi.service';
import { CommonModule } from '@angular/common';
import { Moviedetailsdata } from '../moviedetailsdata';

@Component({
  selector: 'app-moviedetails',
  standalone: true,
  imports: [CommonModule , RouterOutlet, RouterLink],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  movieservice: MovieapiService= inject(MovieapiService);
  movieid= -1;
 md: Moviedetailsdata={} as Moviedetailsdata
  ngOnInit(): void {
    this.movieid= Number(this.route.snapshot.params['id'])
    this.movieservice.fetchMovieById(this.movieid).subscribe((data)=>{
    this.md=data;
    })
  }

}
