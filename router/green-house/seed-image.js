const express = require('express')
const router = express.Router()
const { formatDateTime } = require('../../utils/time')
const yesApi = require('../../utils/yesapi')
const multer = require('multer')
const model_name = 'StandardPictures'

// storage
// 磁盘存储引擎 (DiskStorage)
// 磁盘存储引擎可以让你控制文件的存储。
const storage = multer.diskStorage({
  // destination是用来确定上传的文件应该存储在哪个文件夹中
  destination: function (req, file, cb) {
    cb(null, './static/green-house/img')
  },
  // filename 用于确定文件夹中的文件名的确定
  filename: function (req, file, cb) {
    const timestamp = Date.now().toString()
    const randomNum = parseInt(Math.random() * 9999).toString()
    const suffix =
      file.originalname.split('.')[file.originalname.split('.').length - 1]
    cb(null, `${timestamp}${randomNum}.${suffix}`)
  },
})
const upload = multer({ storage: storage }).single('fileList') // 获取fileList字段的文件

/**
 * @api {post} /seed-image/add
 * @apiName 图片新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条图片数据-yesAPI
 */
router.post('/add', upload, async (req, res) => {
  const PictureSetID = req.body.PictureSetID || ''
  const PictureName = req.body.PictureName || ''
  const PictureDescription = req.body.PictureDescription || ''
  const PictureType = req.body.PictureType || 3 // 1: 正常图片  2：病虫害图片  3：其他
  // console.log(req.body.test, req.file, req.files)
  const { path } = req.file
  const PictureAddress = '/' + path // 图片地址

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.Create',
      model_name,
      data: {
        PictureSetID,
        PictureName,
        PictureDescription,
        PictureType,
        PictureAddress,
      },
    })
    console.log(resYesApi)
    res.send(resYesApi)
  } catch (error) {
    res.send({
      ret: 500,
      msg: '图片新增失败',
    })
  }
})

/**
 * @api {post} /seed-image/update
 * @apiName 图片新增
 * @apiGroup GreenHouse
 *
 * @apiParam {object} item 一条图片数据-yesAPI
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
      msg: '图片更新失败',
    })
  }
})

/**
 * @api {post} /seed-image/del
 * @apiName 图片删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 图片id
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
      msg: '图片删除失败',
    })
  }
})

/**
 * @api {post} /seed-image/multi-del
 * @apiName 图片批量删除
 * @apiGroup GreenHouse
 *
 * @apiParam {Array<Number>} ids [图片id, 图片id, ...]
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
      msg: '图片删除失败',
    })
  }
})

/**
 * @api {post} /seed-image/get
 * @apiName 图片详情
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} id 图片id
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
      msg: '图片删除失败',
    })
  }
})

/**
 * @api {post} /seed-image/page
 * @apiName 图片列表
 * @apiGroup GreenHouse
 *
 * @apiParam {Number} pageNo 页数
 * @apiParam {Number} pageSize 条数
 */
router.post('/page', async (req, res) => {
  const pageNo = Number(req.body.pageNo) || 1
  const pageSize = Number(req.body.pageSize) || 10
  const PictureSetID = req.body.PictureSetID || ''

  try {
    const resYesApi = await yesApi({
      s: 'App.Table.FreeQuery',
      model_name,
      logic: 'and',
      where: `[["id", ">=", "1"], ["PictureSetID", "EQ", "${PictureSetID}"]]`, // ["GreenHouseNameNew", "LIKE", "${greenhouseName}"]]
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
      msg: '图片列表获取失败',
    })
  }
})

module.exports = router
