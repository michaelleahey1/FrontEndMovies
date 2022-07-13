import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {


  movies: any;
  currentMovie = null;
  currentIndex = -1;
  msg: any = "";

  constructor( private movieService : MovieService) { }
  ngOnInit(): void {
    console.log("ngOnInit() called");
    this.readMovies();
  }
  readMovies(): void {
    console.log("readMovies() called");
    this.movieService.readAll()
      .subscribe( {
        next: (movies) => {
          this.movies = movies;
          console.log(movies);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
    deleteMovie( id : number): void {
      console.log("deleteMovie() called: id=" +id);
      this.movieService.delete( id)
        .subscribe( {
          next: (msg) => {
            this.msg = msg;
            console.log(this.msg);
          },
          error: (error) => {
            console.log(error);
          }});
      this.readMovies();
    }
    updateMovie( movie: any)   {
      console.log("updateMovie() called: movie=" +JSON.stringify(movie));
      this.movieService.update( movie.id, movie)
        .subscribe( {
          next: (msg) => {
            this.msg = msg;
            console.log(this.msg);
          },
          error: (error) => {
            console.log(error);
          }});
      this.readMovies();
    }
    refresh(): void {
      this.readMovies();
    }
  
    setCurrentMovie(movie : any, index: number): void {
      this.currentMovie = movie;
      this.currentIndex = index;
    }
}
