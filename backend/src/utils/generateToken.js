import User from "../models/user.models.js";
import ApiError from "./apiError.js";

// Options
export const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "prod",
  // secure: false,
  sameSite: "Lax",
  maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  domain: process.env.DOMAIN,
  path: "/",
};

// Generate access and refresh token
export const generateAccessRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      `Something went wrong while generating token :: ${error}`
    );
  }
};

// Generating 20 Characters Token
export const generate20CharToken = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";

  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
};

// Generate Password Reset Token
export const generatePasswordResetToken = async (userId, token) => {
  try {
    const user = await User.findById(userId);
    user.passwordResetToken = token;
    user.passwordResetTokenExpiry = new Date(+new Date() + 24 * 60 * 60 * 1000);
    await user.save({ validateBeforeSave: true });
  } catch (error) {
    throw new ApiError(
      500,
      `Something went wrong while generating token :: ${error}`
    );
  }
};
