import React from 'react'
import Header from './components/Header'
import {Container} from 'react-bootstrap'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Popular from './components/Popular'
import PopularTv from './components/PopularTv'
import TopMovies from './components/TopMovies'
import TopTv from './components/TopTv'
import CardDetail from './components/CardDetail'

function App() {
  return (
    <div>
      <Container fluid="true">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user/movies">
            <Popular />
          </Route>
          <Route exact path="/user/shows">
            <PopularTv />
          </Route>
          <Route exact path="/user/topmovies">
            <TopMovies />
          </Route>
          <Route exact path="/user/topshows">
            <TopTv />
          </Route>
          <Route exact path="/user/:detailId">
            <CardDetail />
          </Route>
        </Switch>
      </Container>
      
    </div>
  );
}

export default App;
