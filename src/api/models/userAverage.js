class userAverage {
  constructor(userAverage) {
    this.userAverage = userAverage
  }

  get sessionsAverage() {
    return this.userAverage
  }

  build() {
    return this
  }
}

export default userAverage
