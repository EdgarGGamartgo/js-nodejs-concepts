import express from 'express'
import { Person } from '../services/classService/person'
const router = express.Router()

router.get('/api/person', (req, res) => {
  const response = new Person('Edgar', 25);
  console.log(response)

  return res.status(200).send(response.greeting('sayonara!'));
})

export { router as personRouter }
