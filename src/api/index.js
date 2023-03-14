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
      return data.data
    } catch (error) {
      console.error(error)
      throw new Error('Une erreur est survenue lors de la récupération de la moyenne des sessions activités utilisateur')
    }
  }

// Fonction pour récupérer les performances d'un utilisateur
export const fetchUsePerformance = async (id) => {
    try {
      const response = await fetch(urlAPI + id + '/performance')
      const data = await response.json()
      return data.data
    } catch (error) {
      console.error(error)
      throw new Error('Une erreur est survenue lors de la récupération de la moyenne des sessions activités utilisateur')
    }
  }