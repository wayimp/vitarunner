import { email } from "../../util/notify"

export default async function handler(req, res) {
  const { body } = req
  try {
    email("handel@plymouthcommercialservices.com", "Contact from VITARUNNER Website",
      `Full Name: ${body.fullName}\nEmail: ${body.email}\nMessage:\n${body.message}`
    )
    res.status(200).send()
  } catch (err) {
    res.status(500).send({ error: 'Error sending email' })
  }
}