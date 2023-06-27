import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


function App() {
  const isAuthenticated = true; 

  return (
    <Router>
      <div>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/home" /> : <LoginPage />}
        </Route>
        <Route path="/home">
          {isAuthenticated ? <HomePage /> : <Redirect to="/login" />}
        </Route>
      </div>
    </Router>
  );
}

export default App;
