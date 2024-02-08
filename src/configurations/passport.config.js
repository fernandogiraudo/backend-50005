import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { userModel } from "../models/user.model.js";
import { createHash, isValidPassword } from "./bcrypt.js";
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { secret } from "./consts.js";

const initialePassport = () => {
  const cookieExtractor = (req) => {
    let token = null;
    try {
      if (req) {
        token = req.cookies["coderCookieToken"];
      }
    } catch (error) {
      console.log({error});
      token = 'Error'
    }
    return token;
  };

  passport.use(
    "register",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, username, password, done) => {
        const { first_name, last_name, email, age } = req.body;
        try {
          const user = await userModel.findOne({ email });
          if (user) {
            console.log("User already exists");
            return done(null, false);
          }
          const newUser = {
            first_name,
            last_name,
            email,
            age,
            password: createHash(password),
          };
          const result = await userModel.create(newUser);
          return done(null, result);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        try {
          const user = await userModel.findOne({ email: username });
          if (!user || !isValidPassword(user, password)) {
            return done(null, false);
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: secret,
      },
      async (jwt_payload, done) => {
        console.log({jwt_payload});
        try {
          return done(null, jwt_payload);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await userModel.findOne({ _id: id });
    done(null, user._id);
  });
};

export default initialePassport;
