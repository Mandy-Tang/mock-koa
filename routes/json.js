const {readDataFile} = require('../utils/dataFile')

module.exports = async (ctx) => {
  const data = await readDataFile('json.json')
  const json = JSON.parse(data)
  console.log(json)
  ctx.response.type = 'application/json'
  ctx.response.body = json
}
