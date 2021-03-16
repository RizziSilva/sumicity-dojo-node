import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ScoreService } from '../service'

export function ScoreController() {
  const scoreController = Router()
  const scoreService = ScoreService()

  scoreController.get('/score/:movieName', async (req, res, next) => {
    const { movieName } = req.params

    try {
      const movieScore = await scoreService.getMovieScore(movieName)

      res.status(StatusCodes.OK).json(movieScore)
    } catch (error) {
      next(error)
    }
  })

  scoreController.post('/score', async (req, res) => {
    const { movieName, score } = req.body

    try {
      await scoreService.createScore(movieName, score)
      res.status(StatusCodes.OK).json()
    } catch (error) {
      next(error)
    }
  })

  return {
    scoreController,
  }
}
