import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class MovieCard extends Component {
  render() {
    const {movie} = this.props

    return (
      <li className="card-list">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}.jpg`}
          alt={movie.title}
          height="400px"
          width="300px"
        />
        <div className="text-container">
          <h1 className="movie-title">{movie.title}</h1>
          <p>Rating: {movie.vote_average}</p>
          <button type="button">
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </button>
        </div>
      </li>
    )
  }
}

export default MovieCard
