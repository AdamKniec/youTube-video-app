import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../youtubeApi';
import VideoList from './VideoList';

class App extends React.Component {
    state = {
        term: '',
        videosList: []
    }
    handleUserInput = (e) =>{
        this.setState({
            term: e.target.value,
        })
    }
    handleFormSubmit = async param => {
        let videosResponse = await youTube.get('/search', {
            params: {
                q: param
            }
            
        })
        this.setState({
            videosList: videosResponse.data.items
        })
    }
    render(){
        return (
            <div>
                <SearchBar 
                    handleUserInput = {this.handleUserInput}
                    handleFormSubmit = {this.handleFormSubmit}
                    term = {this.state.term}
                />
                <VideoList
                    videosList = {this.state.videosList}
                />
            </div>
                
            
        )
    }
    
}

export default App;