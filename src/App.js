import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages'
import About from './pages/about'
import { MovieDetails } from './components'


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/movies/:detail" component={MovieDetails} />
        </Switch>
      </Router>
  );
}

export default App;
