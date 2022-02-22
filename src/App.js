import './App.css';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
