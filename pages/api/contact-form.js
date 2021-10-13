export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'hocledrive@gmail.com',
      pass: 'upworkHoc!1',
    },
    secure: true,
  })
  console.log(req.body)
}