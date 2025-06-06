import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();

  const { name, email, turnover, location, cibil_status, project_value, info, collateral_status, contribution, message } = body;

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
      Last 2 Year TurnOver: ${turnover}
      Location Existing: ${location}
      Cibil Status: ${cibil_status}
      Project Value: ${project_value}
      New Project Info: ${info}
      Collateral Status: ${collateral_status}
      Own Contribution: ${contribution}
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
