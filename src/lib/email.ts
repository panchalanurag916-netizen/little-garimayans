import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host:   process.env.EMAIL_HOST    || 'smtp.gmail.com',
  port:   Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const FROM      = `"The Little Garimayans" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`
const ADMIN_TO  = process.env.ADMIN_EMAIL || process.env.EMAIL_USER || ''

function brandedHtml(title: string, body: string): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
  </head>
  <body style="margin:0;padding:0;background:#F6F1E7;font-family:'Poppins',Arial,sans-serif;">
    <div style="max-width:580px;margin:40px auto;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">
      <div style="background:linear-gradient(135deg,#99292D,#EE3869);padding:40px 48px;text-align:center;">
        <h1 style="color:#fff;font-size:22px;margin:0;font-weight:700;">The Little Garimayans</h1>
        <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;font-size:13px;">Nurturing India's Future, One SPACE at a Time.</p>
      </div>
      <div style="padding:40px 48px;">
        ${body}
      </div>
      <div style="background:#F6F1E7;padding:24px 48px;text-align:center;">
        <p style="color:#999;font-size:12px;margin:0;">© 2024 The Little Garimayans Pvt. Ltd. | All India</p>
        <p style="color:#999;font-size:12px;margin:4px 0 0;">hello@littlegarimayans.in</p>
      </div>
    </div>
  </body>
  </html>`
}

export async function sendAdmissionConfirmation(data: {
  parentName: string
  studentName: string
  program: string
  email: string
}): Promise<void> {
  const body = `
    <h2 style="color:#99292D;font-size:20px;margin:0 0 16px;">Thank you, ${data.parentName}! 🌟</h2>
    <p style="color:#555;line-height:1.7;margin:0 0 20px;">
      We've received your admission enquiry for <strong>${data.studentName}</strong>
      for the <strong style="color:#EE3869;">${data.program}</strong> program.
    </p>
    <div style="background:#F6F1E7;border-radius:16px;padding:24px;margin:0 0 24px;">
      <p style="color:#333;font-weight:600;margin:0 0 8px;">What happens next?</p>
      <ol style="color:#555;padding-left:20px;margin:0;line-height:1.9;">
        <li>Our admissions team will call you within 24 hours</li>
        <li>We'll schedule a school tour at your convenience</li>
        <li>You'll receive our complete fee structure & curriculum guide</li>
      </ol>
    </div>
    <a href="https://littlegarimayans.in/programs" style="display:inline-block;background:linear-gradient(135deg,#99292D,#EE3869);color:#fff;text-decoration:none;padding:14px 32px;border-radius:50px;font-weight:700;font-size:14px;">Explore Our Programs</a>
  `

  await transporter.sendMail({
    from:    FROM,
    to:      data.email,
    subject: `🎒 Admission Enquiry Received — ${data.studentName} | The Little Garimayans`,
    html:    brandedHtml('Admission Received', body),
  })

  await transporter.sendMail({
    from:    FROM,
    to:      ADMIN_TO,
    subject: `[NEW ADMISSION] ${data.studentName} — ${data.program}`,
    html:    brandedHtml('New Admission Lead', `
      <h2 style="color:#99292D;">New Admission Enquiry</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#777;width:40%;">Student</td><td style="padding:8px 0;font-weight:600;">${data.studentName}</td></tr>
        <tr><td style="padding:8px 0;color:#777;">Parent</td><td style="padding:8px 0;font-weight:600;">${data.parentName}</td></tr>
        <tr><td style="padding:8px 0;color:#777;">Program</td><td style="padding:8px 0;font-weight:600;">${data.program}</td></tr>
        <tr><td style="padding:8px 0;color:#777;">Email</td><td style="padding:8px 0;font-weight:600;">${data.email}</td></tr>
      </table>
    `),
  })
}

export async function sendFranchiseConfirmation(data: {
  fullName: string
  city:     string
  state:    string
  email:    string
}): Promise<void> {
  const body = `
    <h2 style="color:#99292D;font-size:20px;margin:0 0 16px;">Welcome to the Family, ${data.fullName}! 🏫</h2>
    <p style="color:#555;line-height:1.7;margin:0 0 20px;">
      Your franchise enquiry from <strong>${data.city}, ${data.state}</strong> has been received.
      Our franchise development team will connect with you within 48 hours.
    </p>
    <div style="background:#F6F1E7;border-radius:16px;padding:24px;margin:0 0 24px;">
      <p style="color:#333;font-weight:600;margin:0 0 8px;">Your Franchise Journey Begins:</p>
      <ol style="color:#555;padding-left:20px;margin:0;line-height:1.9;">
        <li>Discovery call with our Franchise Head</li>
        <li>Detailed business model & ROI presentation</li>
        <li>Site visit & location feasibility</li>
        <li>Agreement & onboarding</li>
      </ol>
    </div>
    <a href="https://littlegarimayans.in/franchise" style="display:inline-block;background:linear-gradient(135deg,#FAA21B,#F07D15);color:#fff;text-decoration:none;padding:14px 32px;border-radius:50px;font-weight:700;font-size:14px;">Explore Franchise Model</a>
  `

  await transporter.sendMail({
    from:    FROM,
    to:      data.email,
    subject: `🏫 Franchise Enquiry Confirmed | The Little Garimayans`,
    html:    brandedHtml('Franchise Enquiry', body),
  })

  await transporter.sendMail({
    from:    FROM,
    to:      ADMIN_TO,
    subject: `[NEW FRANCHISE] ${data.fullName} — ${data.city}, ${data.state}`,
    html:    brandedHtml('New Franchise Lead', `
      <h2 style="color:#FAA21B;">New Franchise Enquiry</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#777;width:40%;">Name</td><td style="padding:8px 0;font-weight:600;">${data.fullName}</td></tr>
        <tr><td style="padding:8px 0;color:#777;">City</td><td style="padding:8px 0;font-weight:600;">${data.city}, ${data.state}</td></tr>
        <tr><td style="padding:8px 0;color:#777;">Email</td><td style="padding:8px 0;font-weight:600;">${data.email}</td></tr>
      </table>
    `),
  })
}

export async function sendContactReply(data: {
  name:    string
  email:   string
  subject: string
}): Promise<void> {
  await transporter.sendMail({
    from:    FROM,
    to:      data.email,
    subject: `Re: ${data.subject} | The Little Garimayans`,
    html:    brandedHtml('Thank You', `
      <h2 style="color:#99292D;">Thank you, ${data.name}! 💛</h2>
      <p style="color:#555;line-height:1.7;">We've received your message and will get back to you within 24 hours.</p>
    `),
  })
}
