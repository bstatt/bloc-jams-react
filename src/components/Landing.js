import React from 'react';

const Landing = () => (
  <section className="landing">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Turn the music up!</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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
            <h3>Unlimited, streaming, ad-free</h3>
            <p>No arbitrary limits. No distractions.</p>
          </div>
          <div className="col-sm">
            <h3>Mobile enabled</h3>
            <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
