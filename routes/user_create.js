const { readDataFile, writeDataFile } = require('../utils/dataFile')

module.exports = async (ctx) => {
  const data = await readDataFile('users.json')
  const json = JSON.parse(data)
  let newIndex = json[json.length - 1].id + 1
  let newUser = {id: newIndex, ...ctx.request.body}
  json.push(newUser)
  console.log(json)
  await writeDataFile('users.json', JSON.stringify(json))
  ctx.status = 200
  ctx.type = 'application/json'
  ctx.body = json
}
