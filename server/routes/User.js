const router = require("express").Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { createToken, verifyToken } = require("../middleware/jwt");

router.post(
  "/register",

  //Validation control
  [
    check("name", "name is not valid").not().isEmpty(),
    check("email", "email is not valid").isEmail(),
    check(
      "password",
      "password is not valid, it must be min 8 length"
    ).isLength({ min: 8 }),
  ],

  async (req, res) => {
    //Validation result
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { name, email, password, role } = req.body;

    try {
      const user = new User({ name, email, password, role });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.status(201).json({
        status: "success",
        user,
      });
    } catch (e) {
      if (e.keyPattern.email == 1) {
        res.status(400).json("This email is already exist");
      }
    }
  }
);

router.post(
  "/signup",

  [
    check("email", "email is not valid").isEmail(),
    check(
      "password",
      "password is not valid, it must be min 8 length"
    ).isLength({ min: 8 }),
  ],

  async (req, res) => {
    //Validation result
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      User.findOne({ email }, (err, user) => {
        if (user) {
          bcrypt.compare(password, user.password, (error, same) => {
            if (same) {
              const payload = {
                id: user._id,
                email: user.email,
                role: user.role,
              };

              const accessToken = createToken(payload);
              res.status(200).json(accessToken);
            } else {
              res.status(400).json(error);
            }
          });
        } else {
          res.status(400).json(err);
        }
      });
    } catch (e) {
      res.status(400).json(e);
    }
  }
);

router.post(
  "/profile",

  async (req, res) => {
    const token = await req.headers.token;

    try {
      const verified = await verifyToken(token);
      const email = verified.payload.email;
      if(token){
        User.findOne({ email }, (err, user) => {
            if (!err) {
              res.status(200).json(user);
            } else {
              res.status(401).json(err);
            }
          });
      }else{
          res.status(400).json({message:'Token not found'})
      }
    } catch (e) {
      res.status(401).json({
        e
      });
    }
  }
);

module.exports = router;
