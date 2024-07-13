import ReviewForm from "./ReviewForm";
import StarRating from "./Stars";

export default function MovieList({moviesData})  {
    console.log("MovieList Movies data:", moviesData);
    return (
        <>
        Movie List Component

        {moviesData.map(
        (movie, index) => {
          console.log("Movies List Map:", movie);
          return (
            <div className="card bg-dark justify-content-center align-items-center">  
            <div className="card-body bg-light w-75" id={`movie-${movie.id}`} key={index}>
               <br />
              {movie.movieName}
              <br/>
              <img src={movie.poster} alt={movie.name} />
              <br/>
              <p>{movie.synopsis}</p>
              <p>My Review <br/>
              {movie.rating}
              </p>
              <StarRating />
              <ReviewForm/>
            </div>
            <br />
            </div> 
            
          )
        }
      )}
        </>
    )
}
