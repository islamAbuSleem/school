import { mockAuth } from '../db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (body.role) {
    return mockAuth.loginByRole(body.role)
  }
  
  return mockAuth.login(body.email, body.password)
})
