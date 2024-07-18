//import ReviewForm from "./ReviewForm";
import { v4 as uuidv4 } from 'uuid';

export default function ReviewList({thisMoviesReviews}){
   console.log("this is the review list ", thisMoviesReviews) 
    return (
       <>
       {thisMoviesReviews && thisMoviesReviews.map((review) => {
        return (

         
         <div className="card-body" key={uuidv4()}>
          {review.review}
         </div> 
         )
     })
       }

    </> 
    );
    
};

