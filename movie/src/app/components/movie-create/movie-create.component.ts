import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movie = {
    id : 0,
    title:"",
    debut : 0,
    genre: "",
    rating: "",
    director: ""
  };
  submitted = false;

  constructor(private movieService : MovieService) { }


  ngOnInit(): void {
  }
  createMovie() : void {
      const data = {
        id : this.movie.id,
        title : this.movie.title,
        debut : this.movie.debut,
        genre: this.movie.genre,    
        rating: this.movie.rating,
        director: this.movie.director 
      };
      this.movieService.create(data).subscribe({
        next: (d: any) => {
          console.log(d);
          this.submitted = true;
        },
        error: (d: any) => console.log(d),
        complete: () => console.log('complete')
      })
  }
  newMovie() : void {
    this.submitted = false;
    this.movie = {
      id : 0,
      title : "",
      debut : 0,
      genre: "",
      rating:"",
      director:""
    };
  }
}
