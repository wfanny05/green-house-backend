const axios = require('axios')

const isFunction = function (obj) {
  return typeof obj === 'function'
}

const httpRequest = (restfulOptions = {}) => {
  const defaultOptions = {
    timeout: 1000 * 30,
    // 'withCredentials': true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    interceptors: {
      // request ( config ) {
      //   return config
      // },
      // response ( response ) {
      //   return response
      // }
      request: {
        success: (config) => {
          return config
        },
        error: (error) => {
          return Promise.reject(error)
        },
      },
      response: {
        success: (config) => {
          return config
        },
        error: (error) => {
          return Promise.reject(error)
        },
      },
    },
  }
  const options = { ...defaultOptions, ...restfulOptions }
  const http = axios.create(options)
  const request = options.interceptors.request
  const response = options.interceptors.response

  // 请求拦截
  if (isFunction(request)) {
    http.interceptors.request.use(request, (error) => {
      return Promise.reject(error)
    })
  } else {
    http.interceptors.request.use(request.success, request.error)
  }

  // 响应拦截
  if (isFunction(response)) {
    http.interceptors.response.use(response, (error) => {
      return Promise.reject(error)
    })
  } else {
    http.interceptors.response.use(response.success, response.error)
  }

  options.before && options.before(http)

  return http
}

module.exports = httpRequest
