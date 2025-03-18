import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'

class SearchedMoviesPage extends Component {
  state = {movieName: '', movieList: []}

  componentDidMount = () => {
    const {match} = this.props
    const {params} = match
    const {movieName} = params

    this.setState({movieName}, this.fetchMovieDetails)
  }

  fetchMovieDetails = async () => {
    const {movieName} = this.state
    const MOVIE_NAME = movieName
    const API_KEY = '077d87e4ed96a0733b3a76aa65fbed76'
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${MOVIE_NAME}&page=1`,
    )
    const data = await response.json()

    // console.log(data.results)

    this.setState({movieList: data.results})
  }

  render() {
    const {movieList} = this.state

    return (
      <div>
        <div className="movieList-container">
          <ul className="movieList">
            {movieList.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchedMoviesPage)
