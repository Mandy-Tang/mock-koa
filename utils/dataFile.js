const path = require('path')
const fs = require('fs')

const readDataFile = (fileName) => {
  let filePath = path.resolve(__dirname, '..', 'data', fileName)
  return new Promise((resolve, reject) => (
    fs.readFile(filePath, (error, data) => {
      if (error) return reject(error)
      resolve(data)
    })
  ))
}

const writeDataFile = (fileName) => {
  let filePath = path.resolve(__dirname, '..', 'data', fileName)  
  return new Promise((resolve, reject) => (
    fs.writeFile(filePath, data, (error) => {
      if (error) return reject(error)
      resolve()
    }))
  )
}

module.exports = { readDataFile, writeDataFile }
