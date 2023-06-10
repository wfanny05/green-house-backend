const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../../utils/time')
const yesApi = require('../../utils/yesapi')
const model_name = 'SeedInfo'

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
  const greenHouseCode = req.body.greenHouseCode || ''
  const greenhouseName = req.body.greenhouseName || ''

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.FreeQuery',
      model_name,
      logic: 'and',
      // where: `[["id", ">=", "1"], ["greenHouseCode", "LIKE", "${greenHouseCode}"], ["greenhouseName", "LIKE", "${greenhouseName}"]]`,
      where: `[["id", ">=", "1"]]`,
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
