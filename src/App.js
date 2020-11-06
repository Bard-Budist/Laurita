import logo from './logo.svg';
import './App.css';
import {  StrictMode } from 'react'
import Routes from "./routes"
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <StrictMode>
      <Router history={browserHistory}>
        <Routes/>
      </Router>
    </StrictMode>
  );
}

export default App;
