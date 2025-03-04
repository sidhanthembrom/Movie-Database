import {Component} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './index.css'

class Popular extends Component {
  state = {movieList: []}

  componentDidMount = async () => {
    const API_KEY = '077d87e4ed96a0733b3a76aa65fbed76'
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    )
    const data = await response.json()

    // console.log(data)

    this.setState({movieList: data.results})
  }

  render() {
    const {movieList} = this.state
    // console.log(movieList)

    return (
      <div>
        <ul className="movieList">
          {movieList.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Popular
