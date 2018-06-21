import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <section className="landing">
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4">Turn it up!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Link to='/library' className="btn btn-jumbotron btn-lg">Start Listening</Link>
        </p>
      </div>
    </div>
    <section className='selling-points'>
      <h1>Features</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <span className="ion-music-note"></span>
            <h3>Choose Your Music</h3>
            <p>The world is full of music; why should you have to listen to music that someone else chose?</p>
          </div>
          <div className="col-sm">
            <span className="ion-speakerphone"></span>
            <h3>Ad-Free, unlimited streaming</h3>
            <p>No arbitrary limits. No distractions.</p>
          </div>
          <div className="col-sm">
            <span className="ion-iphone"></span>
            <h3>Mobile enabled</h3>
            <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
