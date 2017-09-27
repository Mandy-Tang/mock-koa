
const { readDataFile } = require('../utils/dataFile')

module.exports = async (ctx) => {
  const data = await readDataFile('users.json')
  const json = JSON.parse(data)
  const user = json.find((e) => (String(e.id) === String(ctx.params.id)))
  ctx.status = 200
  ctx.type = 'application/json'
  ctx.body = user
}
