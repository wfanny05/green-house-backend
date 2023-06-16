const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../../utils/time')
const yesApi = require('../../utils/yesapi')
const model_name = 'greenhouseInfo'

const changeItem = (item) => {
  item.greenhouseName && (item.GreenHouseNameNew = item.greenhouseName)
  delete item.greenhouseName
}

const changeItem2 = (item) => {
  item.GreenHouseNameNew && (item.greenhouseName = item.GreenHouseNameNew)
  delete item.GreenHouseNameNew
}
/**
 * @api {post} /green-house/add
 * @apiName 大棚新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条大棚数据-yesAPI
 */
router.post('/add', async (req, res) => {
  let item = req.body.item || {}
  changeItem(item)
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
  let item = req.body.item || {}
  changeItem(item)
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
    console.log(resYesApi)
    res.send(resYesApi)
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
    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '大棚删除失败',
    })
  }
})

/**
 * @api {post} /green-house/get
 * @apiName 大棚详情
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 大棚id
 */
router.post('/get', async (req, res) => {
  const id = req.body.id

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Get',
      model_name,
      id,
    })
    changeItem2(resYesApi.data.data)
    console.log(resYesApi)
    res.send(resYesApi)
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
  const greenHouseCode = req.body.greenHouseCode || ''
  const greenhouseName = req.body.greenhouseName || ''
  const select = req.body.select || ''

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.FreeQuery',
      model_name,
      logic: 'and',
      select,
      where: `[["id", ">=", "1"], ["greenHouseCode", "LIKE", "${greenHouseCode}"], ["GreenHouseNameNew", "LIKE", "${greenhouseName}"]]`, // ["GreenHouseNameNew", "LIKE", "${greenhouseName}"]]
      page: pageNo,
      perpage: pageSize,
      order: ['id DESC'],
      is_real_total: 1,
    })
    resYesApi.data.list.forEach((item) => {
      changeItem2(item)
    })
    res.send(resYesApi)
  } catch (error) {
    console.error(error)
    res.send({
      ret: 500,
      msg: '大棚列表获取失败',
    })
  }
})

module.exports = router
