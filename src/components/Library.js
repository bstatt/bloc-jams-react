import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData }
  }

  render() {
   return (
     <section className='library'>
      <h2>All Your Favorite Music</h2>
      <p className="container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel rutrum turpis. Etiam ultricies sapien erat, nec ornare nisi ultrices vitae. Nunc vel lacus cursus, gravida ligula ac, pretium mi. Sed a viverra massa, pretium facilisis elit. Curabitur hendrerit libero purus, sed iaculis est laoreet in. Ut euismod ligula turpis.</p>
      <div className="card-deck">
        { this.state.albums.map( (album, index) =>
         <Link to={`/album/${album.slug}`} key={index}>
          <div className="card">
            <img className="card-img-top" src={album.albumCover} alt={album.title}/>
            <div className="card-body">
              <h5 className="card-title">{album.title}</h5>
              <p className="card-text">{album.artist}</p>
              <p className="card-text"><small className="text-muted">{album.songs.length} songs</small></p>
            </div>
          </div>
         </Link>)
        }
      </div>
     </section>
    );
  }
}

export default Library;
