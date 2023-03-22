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

      // Format response to replace number by letter of the week
      const dayLetters = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D',
      }
      const formattedSessions = (data) => {
        return data.sessions.map((d) => ({
          ...d,
          day: dayLetters[d.day],
        }))
      }
      return formattedSessions(data.data)
  }

// Get information of user's performance
export const fetchUserPerformance = async (id) => {
      const response = await fetch(urlAPI + id + '/performance')
      const data = await response.json()

      // Format response to replace number by name
      const kindNames = {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité',
      }
      const formattedPerformance = (data) => {
        return data.data.map((d) => ({
          ...d,
          kind: kindNames[d.kind],
        }))
      }
      return formattedPerformance(data.data)
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