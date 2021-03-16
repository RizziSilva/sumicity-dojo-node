import { DataBase } from '../config'

export function MovieRepository() {
  const dataBase = DataBase()

  async function createMovie(body) {
    try {
      const { name, type, duration, description } = body
      const query =
        'INSERT INTO movie(name, `type`, duration, description) ' +
        'VALUES(?, ?, ?, ?) '

      const params = [name, type, duration, description]

      return await dataBase.parameterQuery(query, params)
    } catch (error) {
      throw error
    }
  }

  async function getAllMovies() {
    try {
      const query = 'SELECT * FROM movie'

      return await dataBase.query(query)
    } catch (error) {
      throw error
    }
  }

  async function getMovie(movieName) {
    try {
      const query = 'SELECT * FROM movie WHERE name = ?'
      const params = [movieName]

      const result = await dataBase.parameterQuery(query, params)

      return result[0]
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
