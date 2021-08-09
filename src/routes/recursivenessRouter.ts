import express from 'express'
import { myCompany, sumSalaries } from '../services/Recursiveness/company'
const router = express.Router()

router.get('/api/recursiveness', (req, res) => {
    const response = sumSalaries(myCompany);
    return res.status(200).send(response.toString());
})

export { router as recursivenessRouter }