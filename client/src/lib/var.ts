const env = process.env

const SERVER = env.NEXT_PUBLIC_SERVER
const DESCRIPTION = env.NEXT_PUBLIC_DESCRIPTION
const TITLE = env.NEXT_PUBLIC_TITLE

export {
  SERVER, DESCRIPTION, TITLE,
}