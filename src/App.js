import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MovieList from './Components/MovieList';
import Movie from './Components/Movie'; 
import StarRating from './Components/Stars';

function App() {
const moviesData = [
  {
    id: 1,
    movieName: "Commando",
    poster: "https://www.slashfilm.com/img/gallery/arnold-schwarzenegger-pushed-himself-a-little-too-far-while-filming-commando/l-intro-1648646727.jpg",
    rating:'\u2605\u2605\u2605\u2605\u2605',
    synopsis: `Synopsis: A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.`
  },
  {
    id: 2,
    movieName: "Predator",
    poster: "https://fwmedia.fandomwire.com/wp-content/uploads/2023/11/16043639/arnold-schwarzenegger-refused-returning-to-predator-due-to-his-big-fat-450m-ego.jpg",
    rating:'\u2605\u2605\u2605\u2605\u2605',
    synopsis: `Synopsis: A retired Special Forces colonel tries to save his daughter, who was abducted by his former subordinate.`

  },
  {
    id: 3,
    movieName: "Total Recall",
    poster: "https://cdn.mos.cms.futurecdn.net/xNXDAovetmWoXQJKw3Dgbe.jpg",
    rating:'\u2605\u2605\u2605\u2605\u2605',
    synopsis: `Synopsis: When a man goes in to have virtual vacation memories of the planet Mars implanted in his mind, an unexpected and harrowing series of events forces him to go to the planet for real - or is he?`
  },
]



  return (
    <div className="App">
      
      <MovieList moviesData={moviesData}/>
      <Movie moviesData={moviesData} />
     
     
     
    </div>
  );
}

export default App;


// Requirements for this application:
// MovieList: a container for all the Movie components and their data.  
// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
// Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
// ReviewList: a container inside of a Movie that houses Review components.
// Review: A text review a user can leave on a movie.
// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.
// instead of trying to make an object for the specific movies, try simplifying it on the "movie" component and use the "movie List" to bring it all together. 