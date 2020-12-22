import axios from 'axios'

const backEnd = new axios.create({
    baseURL: 'http://localhost:23333',
    timeout: 5000,
    withCredentials: true
})

export function getFileServer() {
    return backEnd('/getFileServer');
}

export function getAllVideo() {
    return backEnd('/video/getAll');
}

export function getVideoByVid(vid) {
    return backEnd(`/video/get/${vid}`)
}

export function getBackend(options) {
    return backEnd(options);
}