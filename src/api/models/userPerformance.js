/** Class representing user performances*/
class userPerformance {
  /**
   * Create user performance.
   * @param {object} userPerformance - The data
   */
  constructor(userPerformance) {
    this.userPerformance = userPerformance
  }
  /**
   * Get average activity of the user.
   * @return {object} - User performance data containing cardio/energy/endurance/strength/speed/intensity
   */
  get performances() {
    return this.userPerformance
  }

  build() {
    return this
  }
}

export default userPerformance
