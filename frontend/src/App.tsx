import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import PlaceIndex from './places/PlaceIndex'
import PlaceDetails from './places/PlaceDetails'
import Navigation from './Navigation'
import Error404 from './Error404'
import NewPlaceForm from './places/NewPlaceForm'
import EditPlaceForm from './places/EditPlaceForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'
import * as React from 'react'
import { render } from 'react-dom';



class App extends React.Component {
  render() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/sign-up" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/places" component={PlaceIndex} />
          <Route path="/places/new" component={NewPlaceForm} />
          <Route path="/places/:placeId" component={PlaceDetails} />
          <Route path="/places/:placeId/edit" component={EditPlaceForm} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
