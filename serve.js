const express = require('express')
const path = require('path')
const { port } = require('./config')
// const db = require('./db/connect')
const { verToken } = require('./utils/token')
const cors = require('cors')
const log = require('./config/log')

const app = express()
//设置允许跨域访问该服务.
app.use(cors())
// 解析post body
const bodypraser = require('body-parser')
app.use(bodypraser.urlencoded({ extended: true }))
app.use(bodypraser.json())

// logger
app.all('*', async (req, res, next) => {
  //响应开始时间
  const start = new Date()
  //响应间隔时间
  var ms
  try {
    //开始进入到下一个中间件
    await next()
    //记录响应日志
    ms = new Date() - start
    log.i(req, ms)
  } catch (error) {
    //记录异常日志
    ms = new Date() - start
    log.e(req, error, ms)
  }
  console.log(`${req.method} ${req.url} - ${ms}ms-${res.statusCode}`)
})

// 暴漏静态资源
app.use('/static', express.static(path.join(__dirname, '/static')))
// 路由
const userRouter = require('./router/userRouter')
const foodRouter = require('./router/foodRouter')
const foodTypeRouter = require('./router/foodTypeRouter')
const fileRouter = require('./router/fileRouter')
const langRouter = require('./router/langRouter')
const roleRouter = require('./router/roleRouter')
const permitRouter = require('./router/permitRouter')

const greenHouseRouter = require('./router/green-house/green-house')
const envInfoRouter = require('./router/green-house/env-info')
const seedRouter = require('./router/green-house/seed')
const seedLifeCycleRouter = require('./router/green-house/seed-life-cycle')
const seedGalleryRouter = require('./router/green-house/seed-gallery')
const seedImageRouter = require('./router/green-house/seed-image')
const plantRouter = require('./router/green-house/plant')
const plantImageRouter = require('./router/green-house/plant-image')
const sensorRouter = require('./router/green-house/sensor')

// Green House Router
app.use('/green-house', greenHouseRouter)
app.use('/env-info', envInfoRouter)
app.use('/seed', seedRouter)
app.use('/seed-life-cycle', seedLifeCycleRouter)
app.use('/seed-gallery', seedGalleryRouter)
app.use('/seed-image', seedImageRouter)
app.use('/plant', plantRouter)
app.use('/plant-image', plantImageRouter)
app.use('/sensor', sensorRouter)

// 原有的 router
app.use('/user', userRouter)
app.use(
  '/role',
  (req, res, next) => {
    const { token } = req.headers
    verToken(token)
      .then(() => {
        next()
      })
      .catch((err) => {
        res.send(err)
      })
  },
  roleRouter,
)
app.use(
  '/permit',
  (req, res, next) => {
    const { token } = req.headers
    verToken(token)
      .then(() => {
        next()
      })
      .catch((err) => {
        res.send(err)
      })
  },
  permitRouter,
)
app.use(
  '/food',
  (req, res, next) => {
    const { token } = req.headers
    verToken(token)
      .then(() => {
        next()
      })
      .catch((err) => {
        res.send(err)
      })
  },
  foodRouter,
)
app.use(
  '/foodType',
  (req, res, next) => {
    const { token } = req.headers
    verToken(token)
      .then(() => {
        next()
      })
      .catch((err) => {
        res.send(err)
      })
  },
  foodTypeRouter,
)
app.use(
  '/file',
  (req, res, next) => {
    const { token } = req.headers
    verToken(token)
      .then(() => {
        next()
      })
      .catch((err) => {
        if (
          req._parsedUrl.pathname === '/file/downloadrar' ||
          req._parsedUrl.pathname === '/file/uploadrar' ||
          req._parsedUrl.pathname === '/file/downloadrar/remove'
        ) {
          next()
        } else {
          res.send(err)
        }
      })
  },
  fileRouter,
)
app.use(
  '/lang',
  (req, res, next) => {
    const { token } = req.headers
    verToken(token)
      .then(() => {
        next()
      })
      .catch((err) => {
        if (
          req._parsedUrl.pathname === '/lang/export/js' ||
          req._parsedUrl.pathname === '/lang/export'
        ) {
          next()
        } else {
          res.send(err)
        }
      })
  },
  langRouter,
)

app.listen(port, () => {
  console.log('http://localhost:6166/')
})
