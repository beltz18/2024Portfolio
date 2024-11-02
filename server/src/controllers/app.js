import express from 'express'
import parser  from 'body-parser'
import cors    from 'cors'
import logger  from 'morgan'
import * as v  from '../../global/var.js'

import routes from '../routes/index.js'

class Server {
  #origins = v.ORIGINS
  #server = express()

  constructor () {
    this.setMiddlewares()
  }

  setMiddlewares () {
    this.#server.use(parser.json(), parser.urlencoded({ extended: true }))
    this.#server.use(cors({ origin: this.#origins }))
    this.#server.use(logger('dev'))
    this.setRoutes()
  }

  createApp () { return this.#server }

  setRoutes () {
    this.#server.use(routes.commonRoutes)
  }
}

export default Server