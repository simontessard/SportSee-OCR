class User {
  constructor() {
    this._userInfos = { firstName: '', lastName: '', age: 0 }
    this._score = 0
    this._keyData = { calorieCount: 0, proteinCount: 0, carbohydrateCount: 0, lipidCount: 0 }
    this._sessionsAverage = [{ day: 0, sessionLength: 0 }]
    this._sessionsActivity = [{ day: '2023-01-01', kilogram: 0, calories: 0 }]
    this._performances = [{ value: 0, kind: '' }]
  }

  get userInfos() {
    return this._userInfos
  }

  get score() {
    return this._score
  }

  get keyData() {
    return this._keyData
  }

  get sessionsAverage() {
    return this._sessionsAverage
  }

  get sessionsActivity() {
    return this._sessionsActivity
  }

  get performances() {
    return this._performances
  }

  set score(value) {
    this._score = value
  }

  set userInfos(value) {
    this._userInfos = value
  }

  set keyData(value) {
    this._keyData = value
  }

  set sessionsAverage(value) {
    this._sessionsAverage = value
  }

  set sessionsActivity(value) {
    this._sessionsActivity = value
  }

  set performances(value) {
    this._performances = value
  }

  build() {
    return this
  }
}

export default User
