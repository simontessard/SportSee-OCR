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
    return data.data
  }

/**
 * Function to get from the API the activies about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserActivity = async (id) => {
    const response = await fetch(urlAPI + id + '/activity')
    const data = await response.json()
    return data.data
  }

/**
 * Function to get from the API average sessions about user specified
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserSessions = async (id) => {
      const response = await fetch(urlAPI + id + '/average-sessions')
      const data = await response.json()
      return data.data
  }

/**
 * Function to get from the API the performance about user specified 
 * @param {number} id - The id of the user
 * @returns {object} - The data of the user
 */
export const fetchUserPerformance = async (id) => {
      const response = await fetch(urlAPI + id + '/performance')
      const data = await response.json()
      return data.data
  }