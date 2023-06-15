const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../../utils/time')
const yesApi = require('../../utils/yesapi')
const model_name = 'PlantInfo'
const model_name_seed = 'SeedInfo'
const model_name_green_house = 'greenhouseInfo'

/**
 * @api {post} /plant/add
 * @apiName 作物新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条作物数据-yesAPI
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
      msg: '作物新增失败',
    })
  }
})

/**
 * @api {post} /plant/update
 * @apiName 作物新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条作物数据-yesAPI
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
      msg: '作物更新失败',
    })
  }
})

/**
 * @api {post} /plant/del
 * @apiName 作物删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 作物id
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
      msg: '作物删除失败',
    })
  }
})

/**
 * @api {post} /plant/multi-del
 * @apiName 作物批量删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Array<Number>} ids [作物id, 作物id, ...]
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
      msg: '作物删除失败',
    })
  }
})

/**
 * @api {post} /plant/get
 * @apiName 作物详情
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 作物id
 */
router.post('/get', async (req, res) => {
  const id = req.body.id

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Get',
      model_name,
      id,
    })
    const item = resYesApi.data.data || {}
    const resYesApi2 = await yesApi({
      s: 'App.Table.Get',
      model_name: model_name_seed,
      id: Number(item.PlantCode),
    })
    item.seed = resYesApi2.data.data || {}
    item.seedName = item.seed.PlantName || ''
    item.seedId = item.seed.id || ''
    const resYesApi3 = await yesApi({
      s: 'App.Table.Get',
      model_name: model_name_green_house,
      id: Number(item.GreenhouseCode),
    })
    // console.log(item.GreenhouseCode, resYesApi3.data)
    item.greenHouse = resYesApi3.data.data || {}
    item.greenHouseName = item.greenHouse.GreenHouseNameNew || ''
    item.greenHouseId = item.greenHouse.id || ''

    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '作物删除失败',
    })
  }
})

/**
 * @api {post} /plant/page
 * @apiName 作物列表
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} pageNo 页数
 * @apiParam {Number} pageSize 条数
 */
router.post('/page', async (req, res) => {
  const pageNo = Number(req.body.pageNo) || 1
  const pageSize = Number(req.body.pageSize) || 10
  // const greenHouseCode = req.body.greenHouseCode || ''
  // const greenhouseName = req.body.greenhouseName || ''

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.FreeQuery',
      model_name,
      logic: 'and',
      where: `[["id", ">=", "1"]]`,
      // where: `[["id", ">=", "1"], ["greenHouseCode", "LIKE", "${greenHouseCode}"]]`, // ["GreenHouseNameNew", "LIKE", "${greenhouseName}"]]
      page: pageNo,
      perpage: pageSize,
      order: ['id DESC'],
      is_real_total: 1,
    })
    console.log(resYesApi)
    const list = resYesApi.data.list || []
    await new Promise(async (resolve, reject) => {
      for (let index = 0; index < list.length; index++) {
        const item = list[index]
        const resYesApi2 = await yesApi({
          s: 'App.Table.Get',
          model_name: model_name_seed,
          id: Number(item.PlantCode),
        })
        item.seed = resYesApi2.data.data || {}
        item.seedName = item.seed.PlantName || ''
        const resYesApi3 = await yesApi({
          s: 'App.Table.Get',
          model_name: model_name_green_house,
          id: Number(item.GreenhouseCode),
        })
        // console.log(item.GreenhouseCode, resYesApi3.data)
        item.greenHouse = resYesApi3.data.data || {}
        item.greenHouseName = item.greenHouse.GreenHouseNameNew || ''
        if (index == list.length - 1) resolve('done')
      }
    })
    console.log(999, resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '作物列表获取失败',
    })
  }
})

module.exports = router
