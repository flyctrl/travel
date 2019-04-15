/*
* @Author: baosheng
* @Date:   2018-04-02 22:28:51
* @Last Modified time: 2019-04-15 20:20:07
*/
import axios from 'axios'
import { baseUrl, headersJson } from './index'
import storage from './storage'

const netStatus = {
  400: '请求错误',
  401: '未授权，请登录',
  403: '拒绝访问',
  404: '请求地址错误',
  408: '请求超时',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
}
let fetcher = axios.create({
  baseURL: baseUrl,
  withCredentials: 'include',
  transformRequest: [function (data) {
    if (data && data.constructor && data.constructor.name === 'FormData') {
      return data
    }
    return JSON.stringify(data)
  }],
  timeout: 60000,
  headers: headersJson
})
fetcher.interceptors.request.use(function (config) {
  console.log('baseUrl:', baseUrl)
  let Authorization = ''
  Authorization = storage.get('Authorization')
  if (Authorization) {
    config.headers.Authorization = Authorization
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

fetcher.interceptors.response.use(function (response) {
  if (response.data.code === 10013) { // 未登录
    window.location.href = '/login'
  }
  return response.data
}, function (error) {
  if (error.message.indexOf('timeout') !== -1) {
    alert('请求超时', 2)
  }
  if (error && error.response) { // 这里是返回状态码不为200时候的错误处理
    let stu = netStatus.hasOwnProperty(error.response.status) ? netStatus[error.response.status] : '网络异常'
    alert(stu)
  }
  return Promise.reject(error)
})

export default fetcher
