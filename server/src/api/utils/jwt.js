const jwt = require('jsonwebtoken')
const config = require('config')

const privateKey = config.get('jwt.private_key')

exports.createToken = userId => {
  return jwt.sign({body: userId}, privateKey, { algorithm: config.get('jwt.algorithm')})
}

exports.verifyToken = token => {
    jwt.verify(token, privateKey, { algorithm: 'HS256'}, (err, decoded) => {
      if (err) return false
      return true
    })
}
