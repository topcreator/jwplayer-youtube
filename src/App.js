import React from 'react';
import ReactJWPlayer from 'react-jw-player';
import './App.css';

// let jwInterval = null;
const playlist = [{
  default: true,
  endtime: 0,
  // file: "https://www.dropbox.com/s/iy4gwh9t3efm0uh/MIN_05907_HD%20-%20Moxy%20Fruvous%20Interview.mp4?raw=1",
  file: "https://youtube.com/watch?v=HhuGQUZJot8",
  image: "https://rockpeaksassets.s3.amazonaws.com/files/eggs/k/Keys-Alicia/192730-Keys-Alicia-Un-thinkable-Im-Ready-Promo-Videos-from-2010-2010.jpg",
  starttime: 0,
  status: true,
  title: " Brand New Me | Alicia Keys  |  Promo Videos from 2012  | 2012 12-17",
},
{
  default: false,
  endtime: 0,
  // file: "https://www.dropbox.com/s/iy4gwh9t3efm0uh/MIN_05907_HD%20-%20Moxy%20Fruvous%20Interview.mp4?raw=1",
  file: "https://youtube.com/watch?v=qI7k0wQZlBA",
  image: "https://rockpeaksassets.s3.amazonaws.com/files/eggs/k/Keys-Alicia/215196-Keys-Alicia-Tears-Always-Win-Promo-Videos-from-2013-2013.jpg",
  starttime: 0,
  status: true,
  title: " Tears Always Win | Alicia Keys  |  Promo Videos from 2013  | 2013 06-14",
},
{
  default: false,
  endtime: 0,
  // file: "https://www.dropbox.com/s/iy4gwh9t3efm0uh/MIN_05907_HD%20-%20Moxy%20Fruvous%20Interview.mp4?raw=1",
  file: "https://youtube.com/watch?v=HhuGQUZJot8",
  image: "https://rockpeaksassets.s3.amazonaws.com/files/eggs/k/Keys-Alicia/192730-Keys-Alicia-Un-thinkable-Im-Ready-Promo-Videos-from-2010-2010.jpg",
  starttime: 0,
  status: true,
  title: " Un-Thinkable (I'm Ready) | Alicia Keys  |  Promo Videos from 2010  | 2010 05-12",
},
{
  default: false,
  endtime: 0,
  // file: "https://www.dropbox.com/s/iy4gwh9t3efm0uh/MIN_05907_HD%20-%20Moxy%20Fruvous%20Interview.mp4?raw=1",
  file: "http://www.youtube.com/watch?v=Okn0WpJqgHE",
  image: "https://rockpeaksassets.s3.amazonaws.com/files/eggs/k/Keys-Alicia/152736-Keys-Alicia-Its-On-Again-Promo-Videos-from-2014-2014.jpg",
  starttime: 0,
  status: true,
  title: " It's On Again | Alicia Keys  |  Promo Videos from 2014  | 2014",
}
];
let player;
function App() {
  const [title, setTitle] = React.useState('');
  const onReady = () => {
    console.log('onReady')
    player = window.jwplayer('jw-player');
    console.log(player.getPlaylist());
    // player.on('markersupdated', data => {
    //   if (player && typeof player.getMarkersVTT === 'function') {
    //     console.log(data.markers);
    //   }
    // });
    player.on('beforeComplete', () => {
      console.log('beforeComplete===>', player.getPlaylistIndex(), player.getPlaylist());
      // player.next();
      // document.querySelector('iframe.jw-video').style.display = 'none';
      // document.querySelector('.jw-preview').style.display = 'block';
    });
  };

  const onTime = event => {
    // console.log('onTime===>', event);
    // const player = window.jwplayer('jw-player');
    const playlistCurrentItem = player.getPlaylistIndex();
    const video = player.getPlaylistItem(playlistCurrentItem);
    console.log('onTime==>', playlistCurrentItem, video);
    setTitle(video.title);
    // const endtime = playlist[0].endtime;
    // const starttime = playlist[0].starttime;
    // if(player) {
    //   if (endtime > 0) {
    //     if (event.position >= endtime) {
    //       player.seek(endtime);
    //       player.pause();
    //     }
    //   }

    //   if (event.position < starttime) {
    //     player.seek(starttime);
    //   }
    // }
      
  }

  const onVideoLoad = event => {
    console.log('onVideoLoad', event);
    // jwInterval = setInterval(() => onShowMarkers(), 500);
  }

  // const onShowMarkers = () => {
  //   console.log('called showMarkers==>');
  //   const player = window.jwplayer('jw-player');
  //   if (player && typeof player.setMarkers === 'function' && player.getDuration() > 0) {
  //     console.log('players===>', player);
  //     clearInterval(jwInterval);
  //     const markers = [
  //       {
  //         startTime: 980,
  //         endTime: 1330,
  //         text: "title",
  //         color: '#0088FE',
  //       }
  //     ];
  //     player.setMarkers(markers);
  //   }
  // }

  // const onUpdateMarkers = () => {
  //   // const player = window.jwplayer('jw-player');
  //   if (player && typeof player.setMarkers === 'function') {
  //     const markers = [
  //       { startTime: 100, endTime: 600, text: "Marker 1", color: 'blue'},
  //       { startTime: 650, endTime: 900, text: "Marker 2", color: 'green' },
  //       { startTime: 950, endTime: 1800, text: "Marker 3", color: 'red' }
  //     ];
  //     console.log('update markers==>', markers);
  //     player.setMarkers(markers);
  //   }
  // }

  // const plugins = {
  //   'js/videomarkers-8.1.0.js': {
  //     editor: true,
  //     navigation: true,
  //   },
  // };

  React.useEffect(() => {
    player = window.jwplayer('jw-player');
  }, []);

  return (
    <div className="App" style={{width: '100%', textAlign: 'center'}}>
      <div style={{width: 1000}}>
        <ReactJWPlayer
          className="clip-jw-player"
          playerId="jw-player"
          playerScript="https://cdn.jwplayer.com/libraries/L2lWZS0f.js"
          playlist={playlist}
          // customProps={{ plugins }}
          isAutoPlay
          onReady={onReady}
          onVideoLoad={onVideoLoad}
          onTime={onTime}
        />
      </div>
      {/* <button onClick={onUpdateMarkers}>update markers</button> */}
      <div style={{marginTop: 30, textAlign: "left"}}>
        <strong>Title: </strong>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default App;
