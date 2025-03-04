import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Popular from './components/Popular/Popular'
import TopRated from './components/TopRated/TopRated'
import Upcoming from './components/Upcoming/Upcoming'
import MovieSummary from './components/MovieSummary/MovieSummary'
import SearchedMoviesPage from './components/SearchedMoviesPage/SearchedMoviesPage'

// write your code here
class App extends Component {
  state = {}

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Popular} />
          <Route exact path="/top-rated" component={TopRated} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/movie/:id" component={MovieSummary} />
          <Route
            exact
            path="/search/:movieName"
            component={SearchedMoviesPage}
          />
        </Switch>
      </>
    )
  }
}

export default App
