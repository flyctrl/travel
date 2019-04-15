/*
* @Author: baosheng
* @Date:   2018-04-02 22:27:03
* @Last Modified by:   baosheng
* @Last Modified time: 2018-07-01 20:13:26
*/
import fetch from './fetch'

// 获取数据类接口
export const Fetch = (url, params, method = 'get', config) => {
  if (method === 'get') {
    params = { params, ...config }
    config = {}
  }
  return fetch[method](url, params, config).then((res) => {
    if (res.code === 0) {
      return res.data || true
    } else {
      return false
    }
  }, (err) => {
    if ((err + '').indexOf('timeout') !== -1) { // 超时error捕获
      alert('请求超时')
    } else {
      alert(err.msg)
    }
  })
}

// 保存类接口
export const FetchSave = (url, params, method = 'post', config) => {
  if (method === 'get') {
    params = { params, ...config }
    config = {}
  }
  return fetch[method](url, params, config).then((res) => {
    if (res.code === 0) {
      alert(res.msg)
      return res.data || true
    } else {
      return false
    }
  }, (err) => {
    if ((err + '').indexOf('timeout') !== -1) { // 超时error捕获
      alert('请求超时')
    } else {
      alert(err.msg)
    }
  })
}

export default {
  Common: {
    getHome (params) {
      return Fetch('/index.json', params)
    },
    getDetail (params) {
      return Fetch('/detail.json', params)
    },
    getCity (params) {
      return Fetch('/city.json', params)
    }
  }
}
