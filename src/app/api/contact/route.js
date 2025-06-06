import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();

  const { name, email, phone, industry, amount, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL, // example: ameraafinnway@gmail.com  process.env.SMTP_EMAIL
      pass: process.env.SMTP_PASS,  // app password (for Gmail)   process.env.SMTP_PASS
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: process.env.SMTP_EMAIL,
    subject: `New Fund Request from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Sector: ${industry}
      Funding: ${amount} Lakhs
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
