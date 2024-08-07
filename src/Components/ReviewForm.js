import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function ReviewForm ({movie, reviews, setReviews}){

    const [currReview, setCurrReview] =useState("")
   function handleClick(e){
    let newReview = {
        "id": uuidv4(),
        "movie_id": movie.id,
        "review": currReview
    }
    e.preventDefault()
    setReviews([...reviews, newReview])
   }

    return (
            <div>                
                <input type="text" className="form-control" id="user-review" placeholder="Please give us your review!" onChange={(e) => setCurrReview(e.target.value)} ></input>
                <button onClick={(e) => handleClick(e)} className="btn btn-primary">Submit Review</button>

                
            </div>
            
    );
}
