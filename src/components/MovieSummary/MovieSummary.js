import {Component} from 'react'
import './index.css'

class MovieSummary extends Component {
  state = {movieId: null, movieDetails: {}, castDetails: [], genreList: []}

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    // console.log(id)
    this.setState({movieId: id}, () => {
      this.fetchingMovieDetails()
      this.fetchingCastDetails()
    })
  }

  fetchingMovieDetails = async () => {
    const {movieId} = this.state
    const MOVIE_ID = movieId

    const API_KEY = '077d87e4ed96a0733b3a76aa65fbed76'
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`,
    )
    const data = await response.json()
    this.setState({movieDetails: data, genreList: data.genres})
    // console.log(data)
  }

  fetchingCastDetails = async () => {
    const {movieId} = this.state
    const MOVIE_ID = movieId

    const API_KEY = '077d87e4ed96a0733b3a76aa65fbed76'
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}&language=en-US`,
    )
    const data = await response.json()
    this.setState({castDetails: data.cast})
    // console.log(data)
  }

  render() {
    const {movieDetails, castDetails, genreList} = this.state
    const posterImg = movieDetails.poster_path

    return (
      <div className="movieSummary-container">
        <div className="topSection">
          <h1 className="movieDetails-section-title">Movie Details Section</h1>
          <p>{movieDetails.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w300/${posterImg}.jpg`}
            alt={movieDetails.title}
          />
          <p>Rating: {movieDetails.vote_average}</p>
          <p>Duration: {movieDetails.runtime}</p>
          <ul className="genre-list">
            <p>Genre</p>
            {genreList.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Summary: {movieDetails.overview}</p>
        </div>
        <div>
          <h1>Cast Details Section</h1>
          <ul className="castDetails-list">
            {castDetails.map(cast => (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}.jpg`}
                  alt={cast.original_name}
                />
                <p>Original Name: {cast.original_name}</p>
                <p>Character Name: {cast.character}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MovieSummary
