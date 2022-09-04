const UserModel = require("../models/user");

const getUsersName = (req, res) => {
  UserModel.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: users });
  }).select({ "Name": 1, "_id": 0}).catch((err) => console.log(err));
};

const getUsers = (req, res) => {
  UserModel.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

module.exports = {
  getUsersName,
  getUsers,
};
