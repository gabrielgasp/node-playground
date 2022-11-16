import crypto from 'crypto'

const passwordToHash = '&M9bPC4p'

const salt = crypto.randomBytes(16).toString("base64")
const hash = crypto.pbkdf2Sync(
  passwordToHash,
  new Buffer(salt, "base64"),
  10000,
  64,
  'SHA1'
).toString('base64')

console.log(salt)
console.log(hash)
