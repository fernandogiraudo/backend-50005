import dotenv from "dotenv";

export const getVariables = () => {
  dotenv.config();

  return {
    GOOGLE_PASSWORD: process.env.GOOGLE_PASSWORD,
    ACCOUNT_SID: process.env.ACCOUNT_SID,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
    PHONE_NUMBER: process.env.PHONE_NUMBER
  }
};
