const path = require('path')
const fs = require('fs')
const { DATA_FILE_PATH } = require('../config')

const readDataFile = (fileName) => {
  let filePath = path.resolve(DATA_FILE_PATH, fileName)
  return new Promise((resolve, reject) => (
    fs.readFile(filePath, (error, data) => {
      if (error) return reject(error)
      resolve(data)
    })
  ))
}

const writeDataFile = (fileName, data) => {
  let filePath = path.resolve(DATA_FILE_PATH, fileName)
  return new Promise((resolve, reject) => (
    fs.writeFile(filePath, data, (error) => {
      if (error) return reject(error)
      resolve()
    }))
  )
}

module.exports = { readDataFile, writeDataFile }
