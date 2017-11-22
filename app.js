const exec = require('child_process').exec

const cmdWars = `docker run --rm codewars/node-runner run -l javascript -c "console.log('a b c'.split(' '))"`

exec(cmdWars, (err, stdout, stderr) => {
  if (err) throw err
  console.log(stdout)
})
