// URL de l'API
const host = 'http://localhost:3000'
const urlAPI = host + '/user/'

// Fonction pour récupérer les informations d'un utilisateur
export const fetchUserInfo = async (id) => {
    const response = await fetch(urlAPI + id)
    const data = await response.json()
    return data.data
  }

// Fonction pour récupérer les sessions d'activité d'un utilisateur
export const fetchUserActivity = async (id) => {
    const response = await fetch(urlAPI + id + '/activity')
    const data = await response.json()
    return data.data
  }

// Fonction pour récupérer la moyenne des sessions d'activité d'un utilisateur
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

// Fonction pour récupérer les performances d'un utilisateur
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

// Fonction pour récupérer les informations d'un utilisateur
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