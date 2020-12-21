import axios from 'axios'

const backEnd = new axios.create({
    baseURL: 'http://localhost/api',
    timeout: 5000
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

export function getBackend() {
    return backEnd;
}