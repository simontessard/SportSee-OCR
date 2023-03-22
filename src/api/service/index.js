// Host and API adress
const host = 'http://localhost:3000'
const urlAPI = host + '/user/'

// Get personnal information about the user
export const fetchUserInfo = async (id) => {
    const response = await fetch(urlAPI + id)
    const data = await response.json()
    return data.data
  }

// Get information of user's activities
export const fetchUserActivity = async (id) => {
    const response = await fetch(urlAPI + id + '/activity')
    const data = await response.json()
    return data.data
  }

// Get information of user's sessions activities
export const fetchUserSessions = async (id) => {
      const response = await fetch(urlAPI + id + '/average-sessions')
      const data = await response.json()
      return data.data
  }

// Get information of user's performance
export const fetchUserPerformance = async (id) => {
      const response = await fetch(urlAPI + id + '/performance')
      const data = await response.json()
      return data.data
  }

// Get information of user's score
export const fetchUserScore = async (id) => {
    const response = await fetch(urlAPI + id)
    const data = await response.json()

    // Handle different property name issue from api
    if (data.data.score) {
      return data.data.score * 100
    }
    else {
      return data.data.todayScore * 100
    }
}