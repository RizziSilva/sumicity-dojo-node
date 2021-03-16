import { DataBase } from '../config'

export function ScoreRepository() {
  const dataBase = DataBase()

  async function getScores(movieId) {
    try {
      const query = 'SELECT score FROM movie_score WHERE movie = ?'
      const params = [movieId]

      return await dataBase.parameterQuery(query, params)
    } catch (error) {
      throw error
    }
  }

  async function createScore(movieId, score) {
    try {
      const query = 'INSERT INTO movie_score(movie, score) ' + 'VALUES(?, ?)'
      const params = [movieId, score]

      return await dataBase.parameterQuery(query, params)
    } catch (error) {
      throw error
    }
  }

  return {
    getScores,
    createScore,
  }
}
