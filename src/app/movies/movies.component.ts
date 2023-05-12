import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  movies:any[]

  constructor(){
    this.movies=[
      {
        title:"Bahubali",
        genre:"Fiction",
        director:"SS Rajmouli"
      },
      {
        title:"Jathiratnaalu",
        genre:"Comedy",
        director:"Anudeep"

      },
      {
        title:"Prince",
        genre:"Comedy",
        director:"Anudeep"

      },
      {
        title:"Virupaksha",
        genre:"Thriller",
        director:"Karthik Varma"

      },
      {
        title:"Aswadhama",
        genre:"Thriller",
        director:"Ramana Teja"

      }
    ]
  }
  public getMovies():any[]{
    return this.movies
  }
  ngOnInit(): void {
    
  }
}
