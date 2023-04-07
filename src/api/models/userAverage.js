/** Class representing average sessions of user*/
class userAverage {
  /**
   * Create user average.
   * @param {object} userAverage - The data
   */
  constructor(userAverage) {
    this.userAverage = userAverage
  }
  /**
   * Get average activity of the user.
   * @return {object} - Data of average activity
   */
  get sessionsAverage() {
    return this.userAverage
  }

  build() {
    return this
  }
}

export default userAverage
