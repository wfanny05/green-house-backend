const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../../utils/time')
const yesApi = require('../../utils/yesapi')
const model_name = 'EnvironmentInfo'
const model_name_green_house = 'greenhouseInfo'

/**
 * @api {post} /env-info/add
 * @apiName 环境信息新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条环境信息数据-yesAPI
 */
router.post('/add', async (req, res) => {
  const item = req.body.item || {}

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
      msg: '环境信息新增失败',
    })
  }
})

/**
 * @api {post} /env-info/update
 * @apiName 环境信息新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条环境信息数据-yesAPI
 */
router.post('/update', async (req, res) => {
  const id = req.body.id
  const item = req.body.item || {}

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
      msg: '环境信息更新失败',
    })
  }
})

/**
 * @api {post} /env-info/del
 * @apiName 环境信息删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 环境信息id
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
      msg: '环境信息删除失败',
    })
  }
})

/**
 * @api {post} /env-info/multi-del
 * @apiName 环境信息批量删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Array<Number>} ids [环境信息id, 环境信息id, ...]
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
      msg: '环境信息删除失败',
    })
  }
})

/**
 * @api {post} /env-info/get
 * @apiName 环境信息详情
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 环境信息id
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
      msg: '环境信息删除失败',
    })
  }
})

/**
 * @api {post} /env-info/page
 * @apiName 环境信息列表
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} pageNo 页数
 * @apiParam {Number} pageSize 条数
 */
router.post('/page', async (req, res) => {
  const pageNo = Number(req.body.pageNo) || 1
  const pageSize = Number(req.body.pageSize) || 10
  const greenHouseId = req.body.greenHouseId || 0
  const greenHouseCode = req.body.greenHouseCode || ''
  const greenHouseName = req.body.greenHouseName || ''

  try {
    let greenHouseList = []
    let greenHouseObj = {}
    let greenHouseIds = []
    if (greenHouseId) {
      const resYesApi2 = await yesApi({
        s: 'App.Table.Get',
        model_name: model_name_green_house,
        id: greenHouseId,
      })
      greenHouseList = resYesApi2.data.data ? [resYesApi2.data.data] : []
      greenHouseObj[greenHouseId] = resYesApi2.data.data || {}
    } else if (greenHouseCode || greenHouseName) {
      const resYesApi3 = await yesApi({
        s: 'App.Table.FreeQuery',
        model_name: model_name_green_house,
        logic: 'and',
        where: `[["id", ">=", "1"], ["greenHouseCode", "LIKE", "${greenHouseCode}"], ["GreenHouseNameNew", "LIKE", "${greenHouseName}"]]`,
        page: 1,
        perpage: 100,
        order: ['id DESC'],
        is_real_total: 1,
      })
      greenHouseList = resYesApi3.data.list || []
      if (greenHouseList.length > 0) {
        greenHouseIds = greenHouseList.map((item) => {
          greenHouseObj[item.id] = item
          return item.id
        })
      }
      console.log('greenHouseIds', greenHouseIds)
    }

    let query = `[["id", ">=", "1"]]`
    if (greenHouseId) {
      query = `[["id", ">=", "1"], ["greenHouseCode", "EQ", "${greenHouseId}"]]`
    } else if (greenHouseCode || greenHouseName) {
      query =
        greenHouseIds.length > 0
          ? `[["id", ">=", "1"],["greenHouseCode", "IN", ${JSON.stringify(
              greenHouseIds,
            )}]]`
          : `[["id", ">=", "1"],["greenHouseCode", "EQ", "-1"]]`
    }
    const resYesApi = await yesApi({
      s: 'App.Table.FreeQuery',
      model_name,
      logic: 'and',
      where: query,
      page: pageNo,
      perpage: pageSize,
      order: ['id DESC'],
      is_real_total: 1,
    })
    const list = resYesApi.data.list
    for (let index = 0; index < list.length; index++) {
      const item = list[index]
      let greenHouse = {}
      if (greenHouseList.length > 0) {
        greenHouse = greenHouseObj[item.GreenhouseCode] || {}
      } else {
        const resYesApi2 = await yesApi({
          s: 'App.Table.Get',
          model_name: model_name_green_house,
          id: Number(item.GreenhouseCode),
        })
        greenHouse = resYesApi2.data.data || {}
      }
      // console.log(item.greenHouse)
      item.greenHouseId = greenHouse.id
      item.greenHouseName = greenHouse.GreenHouseNameNew
      item.greenHouseCode = greenHouse.greenHouseCode
    }

    // console.log(resYesApi.data.list)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '环境信息列表获取失败',
    })
  }
})

module.exports = router
