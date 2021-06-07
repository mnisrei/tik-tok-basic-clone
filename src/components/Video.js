import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';
function Video({ url, desc, song, channel, likes, shares, messages }) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false)
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video
                className="video__player"
                onClick={handleVideoPress}
                loop
                ref={videoRef}
                src={url}
            ></video>
            {/* videofooter */}
            <VideoFooter
                desc={desc}
                song={song}
                channel={channel}
            />
            {/* video side bar */}
            <VideoSideBar
                likes={likes}
                shares={shares}
                messages={messages}
            />
        </div>
    )
}

export default Video;
