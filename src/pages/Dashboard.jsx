import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import Title from '../components/Title'
import StatsCardList from '../components/StatsCardList'
import BarChartProgression from '../components/BarChartPogression'
import LineChartAverage from '../components/LineChart'
import RadarChartPerformance from '../components/RadarChartPerformance'
import GoalChart from '../components/GoalChart'
import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  fetchUserInfo,
  fetchUserActivity,
  fetchUserSessions,
  fetchUserPerformance,
  fetchUserScore,
} from '../api/service'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  max-width: 1200px;
`

const DataContainer = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`

function Dashboard() {
  // Get the id of the user in the URL
  const { id } = useParams()

  const [userData, setUserData] = useState([])
  const [userName, setUserName] = useState('')
  const [userActivity, setUserActivity] = useState([])
  const [userSessions, setUserSessions] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [userScore, setUserScore] = useState(0)
  const [Error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, userActivity, userSessions, userPerformance, userScore] =
          await Promise.all([
            fetchUserInfo(id),
            fetchUserActivity(id),
            fetchUserSessions(id),
            fetchUserPerformance(id),
            fetchUserScore(id),
          ])
        // Define data to all variables
        setUserData(userData)
        setUserName(userData.userInfos.firstName)
        setUserActivity(userActivity)
        setUserSessions(userSessions)
        setUserPerformance(userPerformance)

        // Handle different property name issue from api
        if (userScore.score) {
          setUserScore(userScore.score * 100)
        } else {
          setUserScore(userScore.todayScore * 100)
        }
      } catch (error) {
        console.error('Une erreur est survenue:', error)
        setError(true)
      }
    }
    fetchData()
  }, [id])

  // In case the id given is wrong, error page is displayed
  if (Error) {
    return <Navigate to="/error" replace={true} />
  }

  return (
    <div>
      <Header />
      <ContentDiv>
        <SideNav />
        {userData && (
          <DataContainer>
            <Title name={userName} />
            <ContentDiv>
              <ChartContainer>
                <BarChartProgression data={userActivity} />
                <ContentDiv>
                  <LineChartAverage data={userSessions} />
                  <RadarChartPerformance data={userPerformance} />
                  <GoalChart score={userScore} />
                </ContentDiv>
              </ChartContainer>
              <StatsCardList data={userData.keyData ?? []} />
            </ContentDiv>
          </DataContainer>
        )}
      </ContentDiv>
    </div>
  )
}

export default Dashboard
