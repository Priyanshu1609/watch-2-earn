import React from 'react';
import ReactPlayer from 'react-player/lazy'

const Video = () => {
    return <div className="absolute h-screen w-full top-0 left-0 overflow-hidden">
        <ReactPlayer
            url='/video.mp4'
            width='100%'
            height='100%'
            controls
            fallback
        />
    </div>;
};

export default Video;
