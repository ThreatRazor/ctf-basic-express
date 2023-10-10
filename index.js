const express = require('express');
const bodyParser = require('body-parser');
const { inviteCode } = require('./secret');
const app = express();
app.use(bodyParser.json());

const PORT = 5001;
const LOG_RUNNING_ON_PORT = 'Running on port: %s';

function createAdmin(user) { }
function createUser(user) { }

const baseUser = { picture: 'default.png' };

app.post('/api/createUser', (req, res) => {
  let user = null;
  try {
    user = req.body;
    if (user.isAdmin && user.inviteCode !== inviteCode) {
      throw new Error('No invite code? No admin!');
    } else {
      let newUser = Object.assign(baseUser, user);
      if (newUser.isAdmin) createAdmin(newUser)
      else createUser(newUser);
      res.send('Successfully created ' +
                `${newUser.isAdmin ? 'Admin' : 'User'}`);
    }
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
});

app.listen(PORT, () => console.log(LOG_RUNNING_ON_PORT, PORT));

module.exports = app