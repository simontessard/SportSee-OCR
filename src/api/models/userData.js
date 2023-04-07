/** Class representing personnal and sport data of user*/
class UserData {
  /**
   * Create user activity.
   * @param {object} userData - Containing all data
   */
  constructor(userData) {
    this.userInfos = userData.userInfos
    this.score = userData.todayScore || userData.score
    this.keyData = userData.keyData
  }
  /**
   * Get the firstname of the user
   * @return {string} - Firstname of user
   */
  get name() {
    return this.userInfos.firstName
  }
  /**
   * Get the goal score of the user
   * @return {number} - Goal of user
   */
  get goal() {
    return this.score
  }
  /**
   * Get macronutrients of user
   * @return {object} - keyData containing calories/lipid/proteins count
   */
  get macro() {
    return this.keyData
  }

  build() {
    return this
  }
}

export default UserData
