const app = require('fastify')()
const execJS = require('./lib/exec')

app.use(require('cors')())

app.get('/', (req, res) => {
  res.send({
    status: 'OK'
  })
})

app.post('/eva', async (req, res) => {
  const { code, testCode } = req.body
  console.log(`GETCODE: ${code}`)
  const cmdWars = `docker run --rm codewars/node-runner run -l javascript -c "${code}" -t cw -f "${testCode}"`
  try {
    const results = await execJS(cmdWars)
    res.send({
      status: 'OK',
      result: results
    })
  } catch (err) {
    res.send({
      status: 'KO',
      result: err
    })
  }
})

app.listen(6543, err => {
  if (err) throw err
  console.log(`Server running at http://localhost:6543/`)
})
