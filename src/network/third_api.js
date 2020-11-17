// 代理 https://bird.ioliu.cn/v1?url=
// TODO: 后端服务器处理数据后返回，如fav数据

import axios from 'axios'

const thirdApi = new axios.create({
    baseURL: 'https://bird.ioliu.cn/v1?url=https://api.acplay.net/api/v2/',
    timeout: 5000
})

export function getShin(filter) {
    return thirdApi.get('bangumi/shin')
}

