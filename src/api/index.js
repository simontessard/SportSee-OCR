// URL de l'API
const host = 'http://localhost:3000'
const urlAPI = host + '/user/'

// Fonction pour récupérer les informations d'un utilisateur
export const fetchUserInfo = async (id) => {
    try {
      const response = await fetch(urlAPI + id)
      const data = await response.json()
      return data.data
    } catch (error) {
      console.error(error)
      throw new Error('Une erreur est survenue lors de la récupération des informations utilisateur')
    }
  }

// Fonction pour récupérer les sessions d'activité d'un utilisateur
export const fetchUserActivity = async (id) => {
    try {
      const response = await fetch(urlAPI + id + '/activity')
      const data = await response.json()
      return data.data
    } catch (error) {
      console.error(error)
      throw new Error('Une erreur est survenue lors de la récupération des activités utilisateur')
    }
  }

// Fonction pour récupérer la moyenne des sessions d'activité d'un utilisateur
export const fetchUserAverage = async (id) => {
    try {
      const response = await fetch(urlAPI + id + '/average-sessions')
      const data = await response.json()
      return data.data.sessions
    } catch (error) {
      console.error(error)
      throw new Error('Une erreur est survenue lors de la récupération de la moyenne des sessions activités utilisateur')
    }
  }

// Fonction pour récupérer les performances d'un utilisateur
export const fetchUserPerformance = async (id) => {
    try {
      const response = await fetch(urlAPI + id + '/performance')
      const data = await response.json()

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
    } catch (error) {
      console.error(error)
      throw new Error('Une erreur est survenue lors de la récupération de la moyenne des sessions activités utilisateur')
    }
  }

// Fonction pour récupérer les informations d'un utilisateur
export const fetchUserScore = async (id) => {
  try {
    const response = await fetch(urlAPI + id)
    const data = await response.json()
    // Format score
    const userScore = [
    { id: '1', name: 'L1', value: 0 },
    { id: '2', name: 'L2', value: 0 },
    ]
    if (data.data.score) {
      userScore[1].value = data.data.score * 100
      userScore[0].value = 100 - userScore[0].value
    }
    else {
      userScore[1].value = data.data.todayScore * 100
      userScore[0].value = 100 - userScore[0].value
    }
    return userScore
  } catch (error) {
    console.error(error)
    throw new Error('Une erreur est survenue lors de la récupération des informations utilisateur')
  }
}