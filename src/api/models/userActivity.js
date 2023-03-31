class userActivity {
  constructor(userActivity) {
    this.userActivity = userActivity
  }

  get sessionsActivity() {
    return this.userActivity
  }

  build() {
    return this
  }
}

export default userActivity
