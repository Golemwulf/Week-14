import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ReviewForm from "./ReviewForm";
import StarRating from "./Stars";
import ReviewList from './ReviewList'

export default function MovieList({moviesData})  {
  const [reviews, setReviews] = useState([
    {
      'id': uuidv4(),
      'movie_id': 1,
      "review": "Don't bother my friend, he's dead tired."
    },
    {
      'id': uuidv4(),
      'movie_id': 2,
      "review": "Get to the Choppa!!."
    },
    {
      'id': uuidv4(),
      'movie_id': 2,
      "review": "Stick around."
    }
  ])
    console.log("MovieList Movies data:", moviesData);

  function filterReviewsByMovie(id){
    let thisMoviesReviews = reviews.filter((review)=> {return review.movie_id === id
    })
    console.log("Movie ID: ",id ,"Filtered Reviews: ", thisMoviesReviews)
    return thisMoviesReviews
  }


    return (
        <div className="card bg-dark" id="header" key='header'>
        

        {moviesData.map(
        (movie, index) => {
           console.log("Movies List Map:", movie);
          return (
            <div className="card bg-dark justify-content-center align-items-center" key={movie.id}>  
            <div className="card-body bg-light w-75" id={`movie-${movie.id}`} key={index}>
              <h2>{movie.movieName}</h2>
              <img src={movie.poster} alt={movie.name} />
              <br/>
              <p>{movie.synopsis}</p>
              <p>My Review<br/>
              {movie.rating}
              </p>
              <StarRating />
              <ReviewForm movie={movie} reviews={reviews} setReviews={setReviews}/>
              <ReviewList thisMoviesReviews={filterReviewsByMovie(movie.id)} />
            </div>
            <br />
            </div> 
            
          )
        }
      )}
        </div>
    )
}
