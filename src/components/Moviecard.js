import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';



const Moviecard = (props) => {
  return (
    <div>
      <Link to={`/movies/${props.movie.title}`}>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.movie.posterURL} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>{props.movie.description}</Card.Text>
          
          <StarRatingComponent
            name="rate1"
            starCount={10}
            value={props.movie.rating}

          />
        </Card.Body>
      </Card>
       </Link>
    </div>
  )
}

export default Moviecard
