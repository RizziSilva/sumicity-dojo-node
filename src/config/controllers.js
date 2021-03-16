import { MovieController, ScoreController } from '../controller'

export function ConfigControllers(app) {
  const { movieController } = MovieController()
  const { scoreController } = ScoreController()

  app.use(movieController)
  app.use(scoreController)
}
