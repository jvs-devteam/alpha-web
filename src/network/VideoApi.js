import axios from 'axios'

const backEnd = new axios.create({
    baseURL: 'http://127.0.0.1:9300',
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
