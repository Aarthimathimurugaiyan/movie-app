import { Component, Input } from '@angular/core';
import { Movielistdata } from '../movielistdata';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
