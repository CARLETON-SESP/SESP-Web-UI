import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Route path="/" exact strict render={ () => {
              return (
                <div>
                  <Home /> 
                </div>
              );
          } }/>
        </div>
      </Router>
    </div>

  );
}

export default App;
