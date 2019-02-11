/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')

const packageJson = require('./package.json')

const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName))
const deleteDir = dirName => {
  const fullPath = path.join(__dirname, dirName)
  if (fs.existsSync(fullPath)) {
    fs.readdirSync(fullPath).forEach(file => {
      const curPath = path.join(fullPath, file)
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteDir(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(fullPath)
  }
}
const writeFile = (fileName, data) => fs.writeFileSync(path.join(__dirname, fileName), data)

console.info('Preparing...')

packageJson.scripts = {
  ...packageJson.scripts,
  tsc: 'tsc',
  lint: 'eslint'
}

packageJson.jest = undefined

packageJson.devDependencies = {
  ...packageJson.devDependencies,
  "babel-jest": "23.6.0"
}

writeFile('package.json', JSON.stringify(packageJson, null, 2))

deleteFile('.flowconfig')
deleteFile('App.js')
deleteDir('__tests__')
deleteFile('setup.js')

console.warn(`Need to rerun 'yarn' again to fix ts-jest bug`)
console.info(`FINISHED!`)