/* eslint-disable no-shadow */

import {Component} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './index.css'

class TopRated extends Component {
  state = {movieList: [], totalPages: 0, currentPage: 1}

  componentDidMount = () => {
    const {currentPage} = this.state
    this.fetchingData(currentPage)
  }

  fetchingData = async currentPage => {
    console.log(currentPage)
    const API_KEY = '077d87e4ed96a0733b3a76aa65fbed76'
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPage}`,
    )
    const data = await response.json()
    // console.log(data)

    this.setState({movieList: data.results, totalPages: data.total_pages})
  }

  handlePrevBtn = () => {
    const {currentPage} = this.state
    if (currentPage > 1) {
      console.log('Prev')
      this.setState(
        prevState => ({currentPage: prevState.currentPage - 1}),
        () => {
          const {currentPage} = this.state
          this.fetchingData(currentPage)
        },
      )
    }
  }

  handleNextBtn = () => {
    const {currentPage, totalPages} = this.state
    if (currentPage < totalPages) {
      console.log('Next')
      this.setState(
        prevState => ({currentPage: prevState.currentPage + 1}),
        () => {
          const {currentPage} = this.state
          this.fetchingData(currentPage)
        },
      )
    }
  }

  render() {
    const {movieList, currentPage} = this.state
    // console.log(currentPage)

    return (
      <div>
        <div className="movieList-container">
          <ul className="movieList">
            {movieList.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </ul>
          <div className="pagination-container">
            <button type="button" onClick={this.handlePrevBtn}>
              Prev
            </button>
            <p>{currentPage}</p>
            <button type="button" onClick={this.handleNextBtn}>
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default TopRated
