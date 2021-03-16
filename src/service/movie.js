import { MovieRepository } from '../repository'

export function MovieService() {
  const movieRepository = MovieRepository()

  async function createMovie(body) {
    try {
      await movieRepository.createMovie(body)
    } catch (error) {
      throw error
    }
  }

  async function getAllMovies() {
    try {
      return await movieRepository.getAllMovies()
    } catch (error) {
      throw error
    }
  }

  async function getMovie(movieName) {
    try {
      return await movieRepository.getMovie(movieName)
    } catch (error) {
      throw error
    }
  }

  return {
    createMovie,
    getAllMovies,
    getMovie,
  }
}
