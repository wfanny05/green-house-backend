const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../../utils/time')
const yesApi = require('../../utils/yesapi')
const model_name = 'SeedInfo'
const model_name_life_cycle = 'StandardLifeCycle'

/**
 * @api {post} /seed/add
 * @apiName 种子新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条种子数据-yesAPI
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
    const id = resYesApi.data.id

    for (let index = 1; index <= 5; index++) {
      const stage = req.body[`stage${index}`] || {}
      const resYesApi2 = await yesApi({
        s: 'App.Table.CheckCreateOrUpdate',
        model_name: model_name_life_cycle,
        check_field: 'PlantCode,GrowingStage',
        data: {
          PlantCode: id,
          GrowingStage: index,
          ...stage,
        },
      })
    }

    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '种子新增失败',
    })
  }
})

/**
 * @api {post} /seed/update
 * @apiName 种子新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条种子数据-yesAPI
 */
router.post('/update', async (req, res) => {
  const id = req.body.id || -1
  const item = req.body.item || {}

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.CheckCreateOrUpdate',
      model_name,
      check_field: 'id',
      data: {
        id,
        ...item,
      },
    })

    for (let index = 1; index <= 5; index++) {
      const stage = req.body[`stage${index}`] || {}
      const resYesApi2 = await yesApi({
        s: 'App.Table.CheckCreateOrUpdate',
        model_name: model_name_life_cycle,
        check_field: 'PlantCode,GrowingStage',
        data: {
          PlantCode: id,
          GrowingStage: index,
          ...stage,
        },
      })
    }

    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '种子更新失败',
    })
  }
})

/**
 * @api {post} /seed/del
 * @apiName 种子删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 种子id
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
      msg: '种子删除失败',
    })
  }
})

/**
 * @api {post} /seed/multi-del
 * @apiName 种子批量删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Array<Number>} ids [种子id, 种子id, ...]
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
      msg: '种子删除失败',
    })
  }
})

/**
 * @api {post} /seed/get
 * @apiName 种子详情
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 种子id
 */
router.post('/get', async (req, res) => {
  const id = req.body.id

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Get',
      model_name,
      id,
    })

    const resYesApi2 = await yesApi({
      s: 'App.Table.FreeQuery',
      model_name: model_name_life_cycle,
      where: `[["id", ">=", "1"], ["PlantCode", "EQ", "${id}"]]`,
    })

    resYesApi2.data.list.forEach((item) => {
      resYesApi.data.data[`stage${item.GrowingStage}`] = item
    })

    for (let index = 1; index <= 5; index++) {
      resYesApi.data.data[`stage${index}`] =
        resYesApi.data.data[`stage${index}`] || {}
    }

    console.log(resYesApi.data)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '种子详情获取失败',
    })
  }
})

/**
 * @api {post} /seed/page
 * @apiName 种子列表
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} pageNo 页数
 * @apiParam {Number} pageSize 条数
 */
router.post('/page', async (req, res) => {
  const pageNo = Number(req.body.pageNo) || 1
  const pageSize = Number(req.body.pageSize) || 10
  const PlantName = req.body.PlantName || ''
  const Supplier = req.body.Supplier || ''

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.FreeQuery',
      model_name,
      logic: 'and',
      where: `[["id", ">=", "1"], ["PlantName", "LIKE", "${PlantName}"], ["Supplier", "LIKE", "${Supplier}"]]`,
      page: pageNo,
      perpage: pageSize,
      order: ['id DESC'],
      is_real_total: 1,
    })
    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '种子列表获取失败',
    })
  }
})

module.exports = router
