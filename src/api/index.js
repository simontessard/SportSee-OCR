// URL de l'API
const host = 'http://localhost:3000'

// Fonction pour récupérer les informations d'un utilisateur
export const fetchUserInfo = async (id) => {
  const response = await fetch(host + '/user/' + id)
  const data = await response.json()
  return data.data
}

// Fonction pour récupérer les sessions d'activité d'un utilisateur
export const fetchUserActivity = async (id) => {
  const response = await fetch(host + '/user/' + id + '/activity')
  const data = await response.json()
  return data.data
}

// Fonction pour récupérer la moyenne des sessions d'activité d'un utilisateur
export const fetchUserAverage = async (id) => {
  const response = await fetch(host + '/user/' + id + '/average-sessions')
  const data = await response.json()
  return data.data
}

// Fonction pour récupérer les performances d'un utilisateur
export const fetchUsePerformance = async (id) => {
  const response = await fetch(host + '/user/' + id + '/performance')
  const data = await response.json()
  return data.data
}