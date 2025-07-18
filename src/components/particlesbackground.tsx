import React from 'react';
import videoUrl from '../assets/bg71.mp4'; // Use your converted video

const VideoBackground: React.FC = () => (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-80 contrast-100 saturate-50"
        >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
    </div>
);

export default VideoBackground;