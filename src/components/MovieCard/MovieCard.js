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
        />
        <div className="text-container">
          <h1>{movie.title}</h1>
          <p>Rating: {movie.vote_average}</p>
          <button>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </button>
        </div>
      </li>
    )
  }
}

export default MovieCard
