const crypto = require('crypto');

const length = Math.ceil(Math.random() * 64) + 64;
const inviteCode = crypto.randomBytes(length).toString('base64');

module.exports = {
  inviteCode,
}
