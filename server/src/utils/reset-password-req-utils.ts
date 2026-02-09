import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
import { Resend } from "resend";

configDotenv();

const resend = new Resend(process.env.RESEND_API_KEY);

// const { AUTH_EMAIL, AUTH_PASS } = process.env;

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: AUTH_EMAIL,
//     pass: AUTH_PASS,
//   },
// });

export const passSolihHuselt = async (
  receiver: string,
  passResetLink: string,
  otp: string,
) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: receiver,
    subject: "forgot password? click here",
    html: `
   <div
   style="
    width: 300px;
    height: 250px;
    border-radius: 8px;
    background-color: aqua;
   "
   >
   <a href="${passResetLink}" style="font-size: 18px; color: red">your otp code is${otp}</a>
   </div>

    `,
  });
};
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL,
//     to: email,
//     subject: 'Your OTP Code',
//     text: `Your OTP is ${otp}`,
//   });
// };
