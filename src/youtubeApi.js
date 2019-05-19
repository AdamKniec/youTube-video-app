import Axios from "axios";

const key = 'AIzaSyDPHNF0dYgGN6MJ3jy5AzMOeI3slcb0QVg';

let youTube = Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 10,
        key
    }
})

export default youTube;