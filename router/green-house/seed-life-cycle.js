const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../../utils/time')
const yesApi = require('../../utils/yesapi')
const model_name = 'StandardLifeCycle'

/**
 * @api {post} /seed-life-cycle/add
 * @apiName 标准生命周期新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条标准生命周期数据-yesAPI
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
      msg: '标准生命周期新增失败',
    })
  }
})

/**
 * @api {post} /seed-life-cycle/update
 * @apiName 标准生命周期新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条标准生命周期数据-yesAPI
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
      msg: '标准生命周期更新失败',
    })
  }
})

/**
 * @api {post} /seed-life-cycle/del
 * @apiName 标准生命周期删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 标准生命周期id
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
      msg: '标准生命周期删除失败',
    })
  }
})

/**
 * @api {post} /seed-life-cycle/multi-del
 * @apiName 标准生命周期批量删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Array<Number>} ids [标准生命周期id, 标准生命周期id, ...]
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
      msg: '标准生命周期删除失败',
    })
  }
})

/**
 * @api {post} /seed-life-cycle/get
 * @apiName 标准生命周期详情
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 标准生命周期id
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
      msg: '标准生命周期删除失败',
    })
  }
})

/**
 * @api {post} /seed-life-cycle/page
 * @apiName 标准生命周期列表
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
      msg: '标准生命周期列表获取失败',
    })
  }
})

module.exports = router
