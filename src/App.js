import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="nav justify-content-start">
            <Link to='/' className="nav-link active" id="logo">BL<span className="ion-disc"></span>C Jams</Link>
            <Link to='/library' className="nav-link">Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
