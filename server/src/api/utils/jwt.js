const jwt = require('jsonwebtoken')
const config = require('config')

function createToken(userId) {
  const privateKey = config.get('jwt.private_key')
  const token = jwt.sign({body: userId}, privateKey, { algorithm: config.get('jwt.algorithm')})

  response.status(200).json({
    'token': token
  })
}

function checkToken() {

}
