import express from 'express'
import { prototypeService } from '../services/prototypeService/prototypeService'
const router = express.Router()

router.get('/api/proto', (req, res) => {
  return res.status(200).send(prototypeService.toString());
})

export { router as prototypeRouter }