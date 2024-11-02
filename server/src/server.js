import Server from './controllers/app.js'
import * as v from '../global/var.js'

class InitServer {
  #port = v.PORT

  constructor () {
    this.app = new Server().createApp()
  }

  createServer () {
    this.app.listen(this.#port, async () => {
      this.listener()
    })
  }

  listener () { console.log(`Server listening on PORT: ${this.#port}`) }
}

new InitServer().createServer()