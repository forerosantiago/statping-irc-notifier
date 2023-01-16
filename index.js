const express = require('express')
const config = require('./config.json')

const app = express()
app.use(express.json())

const irc = require('irc')

app.post('/down', (req, res) => {
  res.sendStatus(200)

  console.log(req.body)
  if(!req.body.online) {
    client.say(config.channel, `${req.body.name} (${req.body.domain}:${req.body.port}) has been down for: ${req.body.downtime}. Failures during the last 24 hours: ${req.body.failures}.`)
  }
})

app.listen(3000, () => {
  console.log(`Lstening on port ${config.port}`)
})

const client = new irc.Client(config.server, config.nick, {
  channels: [config.channel]
})
