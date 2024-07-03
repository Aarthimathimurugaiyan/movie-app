import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

export const routes: Routes = [
    {
        path: '',
        component: MoviesComponent,
        title: "movies"
    },
    {
        path: 'movie/:id',
        component: MoviedetailsComponent,
        title: "moviedetails" 
    }

];
    @NgModule({
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    })
    export class AppRoutingModule{}

