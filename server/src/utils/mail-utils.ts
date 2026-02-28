import { configDotenv } from "dotenv";
import { Resend } from "resend";

configDotenv();

const resend = new Resend(process.env.RESEND_API_KEY);

export const verifyUserEmail = async (receiver: string, verifyLink: string) => {
  try {
    // await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: receiver,
    //   subject: "Verify user",
    //   html: `
    //  <div
    //  style="
    //   width: 300px;
    //   height: 250px;
    //   border-radius: 8px;
    //   background-color: aqua;
    //  "
    //  >
    //  <a href="${verifyLink}" style="font-size: 18px; color: red">Verify user</a>
    //  </div>

    //   `,
    // });
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: receiver,
      subject: "Verify user",
      html: `
     <div
     style="
      width: 300px;
      height: 250px;
      border-radius: 8px;
      background-color: aqua;
     "
     >
     <a href="${verifyLink}" style="font-size: 18px; color: red">Verify user</a>
     </div>`,
    });
    console.log(data, error);
  } catch (error) {
    console.error(error);
  }
};
