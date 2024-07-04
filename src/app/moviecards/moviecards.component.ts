import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movielistdata } from '../moviedetailsdata';

@Component({
  selector: 'app-moviecards',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './moviecards.component.html',
  styleUrl: './moviecards.component.css'
})
export class MoviecardsComponent {
     @Input() movie!: Movielistdata;  
}
