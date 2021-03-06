const userService = require('../services/user-service');

module.exports = {
  create: (req, res) => {
    var user = req.body;
    userService.save(user).then((newUser) => {
      return res.status(200).json(newUser)
    }).catch((err) => {
      return res.status(500).json(err)
    });
  },
};
