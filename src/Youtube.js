import React from 'react';
import YouTube from 'react-youtube';
import './Youtube.css';

class Example extends React.Component {
  _onReady(event) {
    event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
    const videoOptions = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      loop: 1,
      iv_load_policy: 3
    }
  };

    return (
      <div className="video-background">
          <div className="video-foreground">
            <YouTube
              //videoId="hzMnBcJwPXY"
              videoId="o0D6Av1BgUM"
              opts={videoOptions}
              className="video-iframe"
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
          </div>
        </div>
    );
  }


}

export default Example;
