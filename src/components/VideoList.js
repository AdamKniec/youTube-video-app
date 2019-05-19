import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    
    return (
        <div>
            {props.videosList.map((video) => {
                return (
                    <VideoItem
                        videos = {props.videosList}
                        key = {video.id.videoId}
                        title = {video.snippet.title}
                        id = {video.id.videoId}
                    />    
                )
            })}
        </div>
    )
}

export default VideoList;