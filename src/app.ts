import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import { recursivenessRouter } from './routes/recursivenessRouter'
import { globalRouter } from './routes/globalRouter'
import { personRouter } from './routes/personRouter'
import { prototypeRouter } from './routes/prototypeRouter'


import { errorHandler, NotFoundError } from '@oregtickets/common'

const app = express()

declare global {
  namespace NodeJS {
    interface Global {
      ll: string
    }
  }
}

app.use(json())
app.use(recursivenessRouter)
app.use(globalRouter)
app.use(personRouter)
app.use(prototypeRouter)

app.all('*', async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }