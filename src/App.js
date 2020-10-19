import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Post from './components/posts/post';
import ErrorPage from './components/error-page';
import Nav from './Nav';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/posts/:id" component={Post}/>
          <Route path='/' component={ErrorPage}/>
      </Switch>
    </Router>
  );
}

export default App;
