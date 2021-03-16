import { StatusCodes } from 'http-status-codes'

export function ApiKeySecurityMiddleware() {
  const API_KEY = process.env.API_KEY
  async function checkApiKey(req, res, next) {
    const headerApiKey = req.headers['apikey']
    if (!headerApiKey || headerApiKey !== API_KEY) {
      const unauthorizedError = new Error(
        'Unauthorizes request. You should provide a correct access key',
      )
      unauthorizedError.statusCode = StatusCodes.UNAUTHORIZED

      next(unauthorizedError)
    }

    next()
  }

  return {
    checkApiKey,
  }
}
