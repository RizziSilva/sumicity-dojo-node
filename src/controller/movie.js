import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { MovieService } from '../service'

export function MovieController() {
  const movieController = Router()
  const movieService = MovieService()

  movieController.post('/movie', async (req, res, next) => {
    const { body } = req
    try {
      await movieService.createMovie(body)
      res.sendStatus(StatusCodes.NO_CONTENT)
    } catch (error) {
      next(error)
    }
  })

  movieController.get('/movie', async (req, res, next) => {
    try {
      const result = await movieService.getAllMovies()

      result.length
        ? res.status(StatusCodes.OK).json(result)
        : res.status(StatusCodes.NO_CONTENT)
    } catch (error) {
      next(error)
    }
  })

  return {
    movieController,
  }
}
