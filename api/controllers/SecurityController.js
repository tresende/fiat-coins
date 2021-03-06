/**
 * SecurityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const userService = require('../services/user-service');

module.exports = {
  create: (req, res) => {
    var user = req.body;
    userService.search(user).then((token) => {
      return res.status(200).json(token)
    }).catch((err) => {
      return res.status(500).json(err)
    });
  },
};
