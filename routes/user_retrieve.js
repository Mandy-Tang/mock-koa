
const { readDataFile } = require('../utils/dataFile')

module.exports = async (ctx) => {
  const data = await readDataFile('users.json')
  const json = JSON.parse(data)
  ctx.status = 200
  ctx.type = 'application/json'
  ctx.body = json
}
