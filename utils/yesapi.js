const axiosInstance = require('./axios-instance')

async function yesApi(data) {
  try {
    const res = await axiosInstance({
      url: 'http://hd215.api.yesapi.cn/',
      menthod: 'post',
      data: {
        return_data: 0,
        app_key: '1B657613E8C73CBA75BF6A639539CABF',
        sign: 'F041C4097CFD02E882A30A151D5CC05A',
        ...data,
      },
    })
    return res.data
  } catch (error) {
    throw error
  }
}

module.exports = yesApi
