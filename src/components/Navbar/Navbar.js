import {Component} from 'react'
import './index.css'
import {withRouter, Link} from 'react-router-dom'

class Navbar extends Component {
  state = {input: ''}

  handleInput = e => {
    this.setState({input: e.target.value})
  }

  handleKeyDown = () => {
    const {input} = this.state

    const {history} = this.props
    history.push(`/search/${input}`)
  }

  render() {
    const {input} = this.state

    return (
      <div className="navbar-container">
        <h1 className="siteName">movieDB</h1>
        <div>
          <input
            className="searchBox"
            type="text"
            placeholder="Search"
            value={input}
            onChange={this.handleInput}
          />
          <button onClick={this.handleKeyDown} type="button">
            Search
          </button>
        </div>
        <ul className="navbar-list">
          <li>
            <Link to="/">
              <button type="button">Popular</button>
            </Link>
          </li>
          <li>
            <Link to="/top-rated">
              <button type="button">Top Rated</button>
            </Link>
          </li>
          <li>
            <Link to="/upcoming">
              <button type="button">Upcoming</button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Navbar)
