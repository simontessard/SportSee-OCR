import userData from '../models/userData.js'
import userActivity from '../models/userActivity.js'
import userAverage from '../models/userAverage.js'
import userPerformance from '../models/userPerformance.js'

// Host and API adress
const host = 'http://localhost:3000'
const urlAPI = host + '/user/'

/**
 * Function to get from the API the personal information about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserInfo = async (id) => {
  const response = await fetch(urlAPI + id)
  const data = await response.json()
  const newUserData = new userData(data.data)
  return newUserData
}

/**
 * Function to get from the API the activies about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserActivity = async (id) => {
  const response = await fetch(urlAPI + id + '/activity')
  const data = await response.json()
  const userActivityData = new userActivity(data.data)
  return userActivityData
}

/**
 * Function to get from the API average sessions about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserSessions = async (id) => {
  const response = await fetch(urlAPI + id + '/average-sessions')
  const data = await response.json()
  const userAverageData = new userAverage(data.data)
  return userAverageData
}

/**
 * Function to get from the API the performance about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserPerformance = async (id) => {
  const response = await fetch(urlAPI + id + '/performance')
  const data = await response.json()
  const userPerformanceData = new userPerformance(data.data)
  return userPerformanceData
}
