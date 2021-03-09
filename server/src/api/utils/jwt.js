const jwt = require('jsonwebtoken')
const config = require('config')

exports.createToken = (userId) => {
  const privateKey = config.get('jwt.private_key')
  const token = jwt.sign({body: userId}, privateKey, { algorithm: config.get('jwt.algorithm')})
  return token
}
