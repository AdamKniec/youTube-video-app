import React from 'react';

const VideoItem = (props) => { 
    return (
        <div>
            <div>
                <iframe title = "video" width="450" height="300" src ={`https://www.youtube.com/embed/${props.id}`}>
                </iframe>
            </div>
            <div>
                <p>{props.title}</p>
            </div>
        </div>
        
    )
}

export default VideoItem;