/*
* @Author: baosheng
* @Date:   2018-04-02 22:28:51
* @Last Modified by:   baosheng
* @Last Modified time: 2018-06-25 21:58:34
*/
const headersJson = { // 请求头部
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cach',
  'source': 3
}

let baseUrl = '/api'
let nodeEnv = process.env.NODE_ENV
console.log(nodeEnv)
if (nodeEnv === 'development') {
  baseUrl = '/api'
} else if (nodeEnv === 'test') {
  baseUrl = 'http://localhost/'
} else if (nodeEnv === 'production') {
  baseUrl = 'http://localhost:3000/'
}

export { baseUrl, headersJson }
