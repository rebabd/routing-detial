import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import CountryDetail from './component/CountryDetail/CountryDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/country-detail/:countryName">
            <CountryDetail></CountryDetail>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
