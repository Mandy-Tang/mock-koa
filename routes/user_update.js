
const { readDataFile, writeDataFile } = require('../utils/dataFile')

module.exports = async (ctx) => {
  const data = await readDataFile('users.json')
  const json = JSON.parse(data)
  const userIndex = json.findIndex((e) => (String(e.id) === String(ctx.params.id)))
  json[userIndex] = {...json[userIndex], ...ctx.request.body}
  await writeDataFile('users.json', JSON.stringify(json))
  ctx.status = 200
  ctx.type = 'application/json'
  ctx.body = json
}
