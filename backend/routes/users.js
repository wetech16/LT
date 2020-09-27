const router = require("express").Router();
const firebase = require("firebase");

router.route("/add").post((req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
  };
  console.log(newUser);
  //To do validate data
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((data) => {
      return res
        .status(201)
        .json({
          message: `user ${data.user.uid} signed up successfully`,
        })
        .catch((err) => {
          console.error(err);
          return res.status(500).json({ error: err.code });
        });
    });
});

module.exports = router;
