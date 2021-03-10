const jwt = require('jsonwebtoken')
const config = require('config')

const privateKey = config.get('jwt.private_key')

exports.createToken = userId => {
  const user = {
    id: userId
  }

  return jwt.sign({ user }, privateKey)
}

exports.verifyToken = token => {
    let isValid = false
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        isValid = false
      }
      else isValid = true

      isValid = isValid && decoded
    })
    return isValid
}
