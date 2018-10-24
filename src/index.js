import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
//change below components to suit your navigation
import View1 from './components/view1'
import View2 from './components/view2'
import './index.scss';

const routing = (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/view1">View1</Link>
        </li>
        <li>
          <Link to="/view2">View2</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/view1" component={View2} />
      <Route path="/view2" component={View1} />
    </nav>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))
