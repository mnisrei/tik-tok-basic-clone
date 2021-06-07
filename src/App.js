import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './axios';
function App() {
  const [videosData, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/v2/posts");
      // console.log(res);
      setVideos(res.data);
      return res;
    }
    fetchData();
  }, [])
  return (
    <div className="app">
      <div className="app__videos">
        {
          videosData.map(
            ({ url, likes, shares, messages, song, channel, desc, _id }) => {
              return (
                <Video
                  key={_id}
                  id={_id}
                  url={url}
                  likes={likes}
                  shares={shares}
                  messages={messages}
                  song={song}
                  channel={channel}
                  desc={desc}
                />
              );
            })
        }
      </div>
    </div>
  );
}

export default App;