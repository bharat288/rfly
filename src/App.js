import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Landing from './components/Landing';
import FBRedirect from './components/FBRedirect';
function App() {
  return (

 
  <Router>
    <Switch>
       <Route path="/fb/:id">
            <FBRedirect/>
        </Route>
        <Route path="/:url1" >
          <Home />
        </Route>
      
        <Route exact path="/">
          <Landing />
        </Route>
    </Switch>
  </Router>
  );
}

export default App;
