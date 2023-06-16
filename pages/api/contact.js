import { email } from "../../util/notify"

export default async function handler(req, res) {
  const { body } = req
  try {
    email("keith@christianexodus.org", "Contact from VITARUNNER website",
      `Full Name: ${body.fullName}\nEmail: ${body.email}\nMessage:\n${body.message}`
    )
    res.status(200).send()
  } catch (err) {
    res.status(500).send({ error: 'Error sending email' })
  }
}