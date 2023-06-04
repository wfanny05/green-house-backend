const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../utils/time')
const axiosInstance = require('../utils/axios-instance')

/**
 * @api {post} /food/add 商品添加
 * @apiName 商品添加
 * @apiGroup Food
 *
 * @apiParam {String} name 名称
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {Number} typeid 分类id
 * @apiParam {String} img 图片
 */
router.post('/add', (req, res) => {
  const { name, price, desc, typeid, img } = req.body
  Food.find({ name })
    .then((data) => {
      if (data.length === 0) {
        return Food.insertMany({ name, price, desc, typeid, img })
      } else {
        res.send({ code: 500, msg: '商品已存在' })
      }
    })
    .then(() => {
      res.send({ code: 200, msg: '添加成功' })
    })
    .catch(() => {
      res.send({ code: 500, msg: '添加失败' })
    })
})

/**
 * @api {post} /food/del 删除
 * @apiName 删除
 * @apiGroup Food
 *
 * @apiParam {Number} _id id
 */
router.post('/del', (req, res) => {
  const { _id } = req.body

  Food.remove({ _id })
    .then((data) => {
      res.send({ code: 200, msg: '删除成功' })
    })
    .catch(() => {
      res.send({ code: 500, msg: '删除失败' })
    })
})

/**
 * @api {post} /food/update 商品修改
 * @apiName 商品修改
 * @apiGroup Food
 *
 * @apiParam {String} _id id
 * @apiParam {String} name 名称
 * @apiParam {Number} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {Number} typeid 分类id
 * @apiParam {String} img 图片
 */
router.post('/update', (req, res) => {
  const { _id, name, price, desc, typeid, img } = req.body
  Food.updateOne({ _id }, { name, price, desc, typeid, img })
    .then(() => {
      res.send({ code: 200, msg: '修改成功' })
    })
    .catch(() => {
      res.send({ code: 500, msg: '修改失败' })
    })
})

/**
 * @api {post} /food/page 商品列表
 * @apiName 商品列表
 * @apiGroup Food
 *
 * @apiParam {Number} pageNo 页数
 * @apiParam {Number} pageSize 条数
 * @apiParam {Number} typeid 分类id
 * @apiParam {Number} key 关键字查询
 */
router.post('/page', async (req, res) => {
  const pageNo = Number(req.body.pageNo) || 1
  const pageSize = Number(req.body.pageSize) || 10
  const { typeid } = req.body

  const { key } = req.body
  const reg = new RegExp(key)
  let query = {}
  if (typeid) {
    query = {
      typeid,
      $or: [{ name: { $regex: reg } }, { desc: { $regex: reg } }],
    }
  } else {
    query = { $or: [{ name: { $regex: reg } }, { desc: { $regex: reg } }] }
  }
  const res1 = await axiosInstance({
    url: 'http://hd215.api.yesapi.cn/?s=App.Table.FreeQuery&return_data=0&model_name=StandardParameters&logic=and&where=%5B%5B%22id%22%2C+%22%3E%3D%22%2C+%221%22%5D%5D&page=1&perpage=10&is_real_total=1&app_key=1B657613E8C73CBA75BF6A639539CABF&sign=F041C4097CFD02E882A30A151D5CC05A',
  })

  /*http://hd215.api.yesapi.cn/?
  s=App.Table.FreeQuery&
  return_data=0&
  model_name=StandardParameters&
  logic=and&
  where=[["id",+">=",+"1"]]&
  page=1&
  perpage=10&
  is_real_total=1&
  app_key=1B657613E8C73CBA75BF6A639539CABF&
  sign=F041C4097CFD02E882A30A151D5CC05A
  */

  /*http://hd215.api.yesapi.cn/?s=App.Table.Create&
  return_data=0&
  model_name=Vege_Para&
  data={+++++++++++++++++"id":+2,+++++++++++++++++"uuid":+"",+++++++++++++++++"add_time":+"2023-05-16+13:11:26",+++++++++++++++++"update_time":+null,+++++++++++++++++"ext_data":+null,+++++++++++++++++"Temp":+30,+++++++++++++++++"Humidity":+99,+++++++++++++++++"GH_ID":+"1002",+++++++++++++++++"GH_Name":+"西红柿大棚"+++++++++++++}&
  app_key=1B657613E8C73CBA75BF6A639539CABF&
  sign=4390993A5326DD95653F744D6F5E27AB
  */

  console.log(res1.data)

  res.send({ code: 500, msg: '商品列表获取失败', res1: res1.data.data })
  return
})

module.exports = router
