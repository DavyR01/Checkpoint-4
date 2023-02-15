const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

// const { JWT_SECRET, JWT_TIMING } = process.env;
const { JWT_SECRET, JWT_TIMING } = process.env;

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  // hash the password using argon2 then call next()
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashedPassword, req.body.password, hashingOptions)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.user.id };

        const token = jwt.sign(payload, JWT_SECRET, {
          algorithm: "HS512",
          expiresIn: JWT_TIMING,
        });
        delete req.user.hashedPassword;
        res.send({ token, user: req.user });
      } else res.status(401).send({ message: "Wrong password" });
    })
    .catch((err) => {
      // do something with err
      console.error(err);
      res.sendStatus(500);
    });
};

// const verifyToken = (req, res, next) => {
//   try {
//     const autorizationHeader = req.headers.authorization;
//     if (!autorizationHeader)
//       throw new Error("Autorization needed for this route");

//     const [type, token] = autorizationHeader.split(" ");
//     if (type !== "Bearer") throw new Error("Only Bearer token allowed");
//     if (!token) throw new Error("Token needed");

//     req.payload = jwt.verify(token, JWT_SECRET);
//     next();
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(401);
//   }
// };

const verifyToken = (req, res, next) => {
  try {
    // const authorizationHeader = req.get("Authorization");
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }
    if (!token) throw new Error("Token needed");

    req.payloads = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
