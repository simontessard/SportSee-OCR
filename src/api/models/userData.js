class UserData {
  constructor(userData) {
    this.userInfos = userData.userInfos
    this.score = userData.todayScore || userData.score
    this.keyData = userData.keyData
  }

  get name() {
    return this.userInfos.firstName
  }

  get goal() {
    return this.score
  }

  get macro() {
    return this.keyData
  }

  build() {
    return this
  }
}

export default UserData
