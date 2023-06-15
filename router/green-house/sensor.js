const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../../utils/time')
const yesApi = require('../../utils/yesapi')
const model_name = 'SensorData'
const model_name_green_house = 'greenhouseInfo'

/**
 * @api {post} /sensor/add
 * @apiName 传感器新增
 * @apiGroup sensor
 *
 * @apiParam {object} item 一条传感器数据-yesAPI
 */
router.post('/add', async (req, res) => {
  let item = req.body.item || {}
  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Create',
      model_name,
      data: {
        ...item,
      },
    })
    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '传感器新增失败',
    })
  }
})

/**
 * @api {post} /sensor/update
 * @apiName 传感器新增
 * @apiGroup sensor
 *
 * @apiParam {object} item 一条传感器数据-yesAPI
 */
router.post('/update', async (req, res) => {
  const id = req.body.id
  let item = req.body.item || {}
  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Update',
      model_name,
      id,
      data: item,
    })
    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '传感器更新失败',
    })
  }
})

/**
 * @api {post} /sensor/del
 * @apiName 传感器删除
 * @apiGroup sensor
 *
 * @apiParam {Number} id 传感器id
 */
router.post('/del', async (req, res) => {
  const id = req.body.id

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Delete',
      model_name,
      id,
    })
    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '传感器删除失败',
    })
  }
})

/**
 * @api {post} /sensor/multi-del
 * @apiName 传感器批量删除
 * @apiGroup sensor
 *
 * @apiParam {Array<Number>} ids [传感器id, 传感器id, ...]
 */
router.post('/multi-del', async (req, res) => {
  const ids = req.body.ids

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.MultiDelete',
      model_name,
      ids,
    })
    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '传感器删除失败',
    })
  }
})

/**
 * @api {post} /sensor/get
 * @apiName 传感器详情
 * @apiGroup sensor
 *
 * @apiParam {Number} id 传感器id
 */
router.post('/get', async (req, res) => {
  const id = req.body.id

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Get',
      model_name,
      id,
    })
    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '传感器删除失败',
    })
  }
})

/**
 * @api {post} /sensor/page
 * @apiName 传感器列表
 * @apiGroup sensor
 *
 * @apiParam {Number} pageNo 页数
 * @apiParam {Number} pageSize 条数
 */
router.post('/page', async (req, res) => {
  const pageNo = Number(req.body.pageNo) || 1
  const pageSize = Number(req.body.pageSize) || 10
  const SensorCode = req.body.SensorCode || ''
  const SensorName = req.body.SensorName || ''

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.FreeQuery',
      model_name,
      logic: 'and',
      where: `[["id", ">=", "1"], ["SensorCode", "LIKE", "${SensorCode}"],["SensorName", "LIKE", "${SensorName}"]]`, //
      page: pageNo,
      perpage: pageSize,
      order: ['id DESC'],
      is_real_total: 1,
    })

    const list = resYesApi.data.list || []
    await new Promise(async (resolve, reject) => {
      for (let index = 0; index < list.length; index++) {
        const item = list[index]
        const resYesApi2 = await yesApi({
          s: 'App.Table.Get',
          model_name: model_name_green_house,
          id: Number(item.greenHouseCode),
        })
        // console.log(item.greenHouseCode, resYesApi2.data)
        item.greenHouse = resYesApi2.data.data || {}
        item.greenhouseName = item.greenHouse.GreenHouseNameNew || ''
        if (index == list.length - 1) resolve('done')
      }
    })

    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '传感器列表获取失败',
    })
  }
})

module.exports = router
