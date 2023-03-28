class User {
  constructor() {
    this._user = {
      userInfos: { firstName: '', lastName: '', age: 0 },
      score: 0,
      keyData: { calorieCount: 0, proteinCount: 0, carbohydrateCount: 0, lipidCount: 0 },
      sessionsAverage: [{ day: 0, sessionLength: 0 }],
      sessionsActivity: [{ day: '2023-01-01', kilogram: 0, calories: 0 }],
      performances: [{ value: 0, kind: '' }],
    }
  }
  userInfos(userInfos) {
    this._user.userInfos = userInfos
    return this
  }
  userScore(score) {
    this._user.score = score
    return this
  }
  keyData(keyData) {
    this._user.keyData = keyData
    return this
  }
  sessionsAverage(sessionsAverage) {
    this._user.sessionsAverage = sessionsAverage
    return this
  }
  sessionsActivity(sessionsActivity) {
    this._user.sessionsActivity = sessionsActivity
    return this
  }
  performances(performances) {
    this._user.performances = performances
    return this
  }
  build() {
    return this._user
  }
}

export default User