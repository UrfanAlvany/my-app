import axios from 'axios'

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key:"AIzaSyAHmkut7wCOCu21vPOykH38pJrDhZLwDOU",
    },
})


export default request