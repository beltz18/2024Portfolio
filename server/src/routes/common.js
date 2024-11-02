import { Router } from 'express'

const route = Router()

route.get('/', (req, res) => {
  res.json({ message: 'lalala' })
})

export default route