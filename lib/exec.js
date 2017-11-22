const exec = require('child_process').exec

const execJS = code => {
  return new Promise((resolve, reject) => {
    exec(code, (error, stdout, stderr) => {
      if (error) reject(error)
      resolve(stdout)
    })
  })
}

module.exports = execJS
