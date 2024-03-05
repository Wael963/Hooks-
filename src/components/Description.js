import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Description = (props) => {
    const params = useParams()
    console.log("params:", params)
    let movie = props.movies.find(el => el.title == params.name)
    return (
        <div>
            <h1>{movie.title}</h1>
            
            <h2>{movie.trailer}</h2>
            
            <h5>{movie.description}</h5>

            <Link to="/">Home</Link>
        </div>
    )
}

export default Description
