const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;
  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0] != null) {
        [req.user] = users;
        next();
      } else res.status(401).send({ message: "User not found" });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};
