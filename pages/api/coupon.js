import { email } from "../../util/notify"

export default async function handler(req, res) {
  const { body } = req
  try {
    email("handel@plymouthcommercialservices.com", "Newsletter Signup from VITARUNNER Website",
      `Full Name: ${body.fullName}\nEmail: ${body.email}`
    )
    res.status(200).send()
  } catch (err) {
    res.status(500).send({ error: 'Error sending email' })
  }

  try {
    email(body.email, "Nutricel Methylene Blue Coupon Code",
        `Get 10% off everything on Amazon: https://www.amazon.com/promocode/A33SFPHIC8J16C`
      )
    res.status(200).send()
  } catch (err) {
    res.status(500).send({ error: 'Error sending email' })
  }
}