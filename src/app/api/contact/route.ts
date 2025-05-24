import EmailTemplate from "@/app/Emails/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST(request: Request) {
  const { name, email, phone, service } = await request.json(); // Destructure 'service'
 
  // Set your email address here
  const yourEmail = "noumannawazbackend@gmail.com"; // Replace with your email address

  try {
    // Send email to yourself
    const { data, error } = await resend.emails.send(
      {
        from: "Acme <onboarding@resend.dev>",
        to: [`${yourEmail}`], // Send to your email address
        subject: `Form Submission : ${name}`,
        react: EmailTemplate({ name, email, phone, service }), // Include 'service' in the email
      }
    );

    if (error) {
      console.log(error.message);

      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}