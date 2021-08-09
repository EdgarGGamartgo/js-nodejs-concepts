import express from 'express'
import { globalAddon } from '../services/globalAddon/globalAddon'
const router = express.Router()

router.get('/api/global', (req, res) => {
  const response = globalAddon();
  console.log(response)

  return res.status(200).send({ updatedGlobal: response.global.ll, originalGlobal: response.myGlobalCopy.ll });
})

export { router as globalRouter }