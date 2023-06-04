const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../../utils/time')
const yesApi = require('../../utils/yesapi')
const model_name = 'greenhouseInfo'

/**
 * @api {post} /green-house/add
 * @apiName 大棚新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条大棚数据-yesAPI
 */
router.post('/add', async (req, res) => {
  const item = req.body.item || {}

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Create',
      model_name,
      data: {
        Category: '蔬菜类',
        PlantName: '番茄22',
        Stage: '1', // 1 萌发期；2 幼苗期；3 生长期；4 开花期；5 结果期
        ...item,
      },
    })
    console.log(resYesApi.data)
    res.send(resYesApi.data)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '大棚新增失败',
    })
  }
})

/**
 * @api {post} /green-house/update
 * @apiName 大棚新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条大棚数据-yesAPI
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
    console.log(resYesApi.data)
    res.send(resYesApi.data)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '大棚更新失败',
    })
  }
})

/**
 * @api {post} /green-house/del
 * @apiName 大棚删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 大棚id
 */
router.post('/del', async (req, res) => {
  const id = req.body.id

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Delete',
      model_name,
      id,
    })
    console.log(resYesApi.data)
    res.send(resYesApi.data)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '大棚删除失败',
    })
  }
})

/**
 * @api {post} /green-house/multi-del
 * @apiName 大棚批量删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Array<Number>} ids [大棚id, 大棚id, ...]
 */
router.post('/multi-del', async (req, res) => {
  const ids = req.body.ids

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.MultiDelete',
      model_name,
      ids,
    })
    console.log(resYesApi.data)
    res.send(resYesApi.data)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '大棚删除失败',
    })
  }
})

/**
 * @api {post} /green-house/page
 * @apiName 大棚列表
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} pageNo 页数
 * @apiParam {Number} pageSize 条数
 */
router.post('/page', async (req, res) => {
  const pageNo = Number(req.body.pageNo) || 1
  const pageSize = Number(req.body.pageSize) || 10

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.FreeQuery',
      model_name,
      logic: 'and',
      where: '[["id", ">=", "1"], ["greenHouseCode", "LIKE", ""]]',
      page: pageNo,
      perpage: pageSize,
      is_real_total: 1,
    })
    console.log(resYesApi.data)
    res.send(resYesApi.data)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '大棚列表获取失败',
    })
  }
})

module.exports = router
