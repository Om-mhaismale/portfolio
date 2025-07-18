import React from 'react';
import videoUrl from '../assets/bg71.mp4'; // Use your converted video

const VideoBackground: React.FC = () => (
    <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
);

export default VideoBackground;