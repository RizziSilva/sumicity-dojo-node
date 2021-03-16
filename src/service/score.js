import { MovieService } from './movie'
import { ScoreRepository } from '../repository'

export function ScoreService() {
  const movieService = MovieService()
  const scoreRepository = ScoreRepository()

  async function getMovieScore(movieName) {
    try {
      const movie = await movieService.getMovie(movieName)

      if (!movie) throw new Error('Filme não encontrado.')

      const { id } = movie
      const scores = await scoreRepository.getScores(id)

      const scoresQuantity = scores.length
      if (scoresQuantity === 0) return 0

      const totalScore = scores.reduce((value, { score }) => {
        const valueAsInt = parseInt(value)
        const scoreAsInt = parseInt(score)

        return valueAsInt + scoreAsInt
      }, 0)

      const finalScore = totalScore / scoresQuantity

      return finalScore.toFixed(2)
    } catch (error) {
      throw error
    }
  }

  async function createScore(movieName, score) {
    try {
      const movie = await movieService.getMovie(movieName)

      return await scoreRepository.createScore(movie.id, score)
    } catch (error) {
      throw error
    }
  }

  return {
    getMovieScore,
    createScore,
  }
}
