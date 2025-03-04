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
        <h1>movieDB</h1>
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
            <button>
              <Link to="/">Popular</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/top-rated">Top Rated</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/upcoming">Upcoming</Link>
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Navbar)
