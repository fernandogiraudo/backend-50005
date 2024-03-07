import { Router } from "express";
import CustomErrors from "../services/errors/CustomError.js";
import { generateSingleUserError, generateUserErrorInfo, userNotFound } from "../services/errors/info.js";
import ErrorEnum from "../services/errors/error.enum.js";

const userRoutes = Router();

const users = [];
userRoutes.get("/", (req, res) => {
  res.send({ users });
});

userRoutes.post("/", (req, res) => {
  try {
    const { first_name, last_name, email, age } = req.body;
    if (!first_name || !last_name || !email || !age) {
      CustomErrors.createError({
        name: "User creation fails",
        cause: generateUserErrorInfo(req.body),
        message: "Error trying to create user",
        code: ErrorEnum.INVALID_TYPE_ERROR,
      });
    }
    const user = {
      first_name,
      last_name,
      email,
      age,
    };
    if (users.length === 0) {
      user.id = 1;
    } else {
      user.id = users[users.length - 1].id + 1;
    }
    users.push(user);
    res.send({ users });
  } catch (error) {
    CustomErrors.createError({
        name: "User creation fails",
        cause: generateUserErrorInfo(req.body),
        message: "Error trying to create user",
        code: -1,
      });
  }
});

userRoutes.get('/:uId', (req, res) => {
    const uId  = +req.params.uId;
    if(uId < 0 || isNaN(uId)){
        CustomErrors.createError({
            name: 'find user failed',
            cause: generateSingleUserError(uId),
            message: 'Error trying to find a single user',
            code: ErrorEnum.INVALID_PARAM
        });
    }
    const user = users.find(u => u.id === uId);
    if(!user){
        CustomErrors.createError({
            name: 'user not found',
            cause: userNotFound(),
            message: 'Error - user not found',
            code: ErrorEnum.USER_NOT_FOUND
        })
    }
    res.send({user});
})

export default userRoutes;
