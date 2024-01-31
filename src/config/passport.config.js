import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { tokenSecret } from "../utils/constants.js";

const cookieExtractor = (req) => {
  let token = null;
  if (req) {
    token = req.cookies["coderCookieToken"];
  }
  return token;
};

const initializePassPort = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: tokenSecret,
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

export default initializePassPort;
