import axios from 'axios'

/**
 * 一些通用的设置
 */

// 跨域请求带上cookie
axios.defaults.withCredentials = true

/**
 * 设置拦截器
 */

// 请求拦截器
axios.interceptors.request.use(config => {
  return config
})

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    alert('请求错误')
  }
)
