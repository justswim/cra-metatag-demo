import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      This is the home page!
    </p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      This is the about page!
    </p>
  </div>
)

const Contact = ({ match }) => (
  <div>
    <h2>Contact</h2>
    <p>
      This is the contact us page!
    </p>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)
export default App;