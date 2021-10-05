const app = require('./app')
const handlers = require('./handlers')

app.get('/test', handlers.test)

app.listen().catch((err) => {
  console.log(err.toString())
  process.exit(1)
})