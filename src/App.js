import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Project from './Component/Projects/Project';
import Contact from './Component/Contact/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ItemDetail from './Component/ItemDetail/ItemDetail';
import Home from './Component/Home/Home';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <About></About>
            <Project></Project>
            <Contact></Contact>
          </Route>
          <Route path="/ItemDetail/:ItemDetailId">
            <ItemDetail></ItemDetail>
          </Route>
        </Switch>

      </Router>




    </div>
  );
}

export default App;
