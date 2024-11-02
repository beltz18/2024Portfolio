import axios from 'axios'
import { SERVER } from '@lib/var'

const instance = axios.create({
  baseURL: SERVER,
  timeout: 10000,
})

export default instance