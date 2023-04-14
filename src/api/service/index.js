import userData from '../models/userData.js'
import userActivity from '../models/userActivity.js'
import userAverage from '../models/userAverage.js'
import userPerformance from '../models/userPerformance.js'

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../mockedData/data.js'
const env = process.env.REACT_APP_DEVELOPMENT || 'false'

// Host and API adress
/** @const {string} */
const host = 'http://localhost:3000'
/** @const {string} */
const urlAPI = host + '/user/'

/**
 * Function to get from the API the personal information about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserInfo = async (id) => {
  // Development environment
  if (env === 'true') {
    const data = USER_MAIN_DATA
    const newUserData = new userData(id === '12' ? data[0] : data[1])
    return newUserData
    // Production environment
  } else {
    const response = await fetch(urlAPI + id)
    const data = await response.json()
    const newUserData = new userData(data.data)
    return newUserData
  }
}

/**
 * Function to get from the API the activies about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserActivity = async (id) => {
  // Development environment
  if (env === 'true') {
    const data = USER_ACTIVITY
    const userActivityData = new userActivity(id === '12' ? data[0] : data[1])
    return userActivityData
    // Production environment
  } else {
    const response = await fetch(urlAPI + id + '/activity')
    const data = await response.json()
    const userActivityData = new userActivity(data.data)
    return userActivityData
  }
}

/**
 * Function to get from the API average sessions about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserSessions = async (id) => {
  // Development environment
  if (env === 'true') {
    const data = USER_AVERAGE_SESSIONS
    const userAverageData = new userAverage(id === '12' ? data[0] : data[1])
    return userAverageData
    // Production environment
  } else {
    const response = await fetch(urlAPI + id + '/average-sessions')
    const data = await response.json()
    const userAverageData = new userAverage(data.data)
    return userAverageData
  }
}

/**
 * Function to get from the API the performance about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserPerformance = async (id) => {
  // Development environment
  if (env === 'true') {
    const data = USER_PERFORMANCE
    const userPerformanceData = new userPerformance(id === '12' ? data[0] : data[1])
    return userPerformanceData
    // Production environment
  } else {
    const response = await fetch(urlAPI + id + '/performance')
    const data = await response.json()
    const userPerformanceData = new userPerformance(data.data)
    return userPerformanceData
  }
}
