import React, { useState } from 'react';
import "./VideoSideBar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function VideoSideBar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSideBar">
            <div className="videoSideBar__btn">
                {liked ? (
                    <FavoriteIcon fontSize="large"
                        onClick={(e) => {
                            setLiked(false);
                        }} />
                ) : (
                    <FavoriteBorderIcon
                        fontSize="large"
                        onClick={(e) => {
                            setLiked(true);
                        }}
                    />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSideBar__btn">
                <MessageIcon fontSize="large" />
                <p>{shares}</p>
            </div>
            <div className="videoSideBar__btn">
                <ShareIcon fontSize="large" />
                <p>{messages}</p>
            </div>
        </div>
    )
}

export default VideoSideBar;
