"use client";
import { BigPlayButton, Player } from 'video-react';


const Video = () => {
    return (
    <div>
        <Player
            width={280}
            fluid={false}
            preload="auto"
        >
            <BigPlayButton position="center" />
            <source src="/videos/gameplay.mp4" />
        </Player>
      </div>
    )
}

export default Video;