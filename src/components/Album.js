import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      hover: [false]
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true});
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false});
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song, index) {
    const isSameSong = this.state.currentSong === song;

    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleMouseEnter(song, index) {
    var hover = this.state.hover;
    hover[index] = true;
    this.setState({
      hover: hover
    })
  }

  handleMouseLeave(song, index) {
    var hover = this.state.hover;
    hover[index] = false;
    this.setState({
      hover: hover
    })
  }

  renderIcons(song, index) {
    let status = this.state.hover;
    let hoverStatus = status[index] === true;
    //if song is playing, show a pause icon
    if(this.state.isPlaying && this.state.currentSong === song) {
      return <td className="ion-pause"></td>;
      //if the current song is not playing, show a play icon
    } else if(!this.state.isPlaying && !this.state.currentSong === song || hoverStatus){
      return <td className="ion-play"></td>;
      //otherwise, show the song number
    } else {
      return <td className="song-number">{index + 1}</td>;
    }
  }

  render() {
    return(
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
          {this.state.album.songs.map( (song, index) =>
            <tr className="song" key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.handleMouseEnter(song, index)} onMouseLeave={() => this.handleMouseLeave(song, index)}>
             {this.renderIcons(song, index)}
             <td className="song-title">{song.title}</td>
             <td className="song-duration">{song.duration}</td>
            </tr>
          )}
          </tbody>
        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
        />
      </section>
    );
  }
}


export default Album;
