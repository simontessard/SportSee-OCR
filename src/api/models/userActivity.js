/** Class representing user activies*/
class userActivity {
  /**
   * Create user activity.
   * @param {object} userActivity - The data
   */
  constructor(userActivity) {
    this.userActivity = userActivity
  }
  /**
   * Get sessions activity of the user.
   * @return {object} - Data of sessions activity
   */
  get sessionsActivity() {
    return this.userActivity
  }

  build() {
    return this
  }
}

export default userActivity
