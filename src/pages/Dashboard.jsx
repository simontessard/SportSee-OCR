import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import Title from '../components/Title'
import StatsCardList from '../components/StatsCardList'
import BarChartProgression from '../components/BarChartPogression'
import LineChartAverage from '../components/LineChart'
import RadarChartPerformance from '../components/RadarChartPerformance'
import GoalChart from '../components/GoalChart'
import React, { useState, useEffect, useRef } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  fetchUserInfo,
  fetchUserActivity,
  fetchUserSessions,
  fetchUserPerformance,
} from '../api/service'

import User from '../api/models/user.js'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 1000px;
`

const DataContainer = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`

function Dashboard() {
  // Get the id of the user in the URL
  const { id } = useParams()

  const renderAfterCalled = useRef(true)

  const [user, setUser] = useState(new User())

  const [Error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, userActivity, userSessions, userPerformance] = await Promise.all([
          fetchUserInfo(id),
          fetchUserActivity(id),
          fetchUserSessions(id),
          fetchUserPerformance(id),
        ])
        // Define data to our object User and set it
        const newUser = new User()
        newUser.userInfos = userData.userInfos
        newUser.score = userData.todayScore || userData.score
        newUser.keyData = userData.keyData
        newUser.sessionsActivity = userActivity
        newUser.sessionsAverage = userSessions
        newUser.performances = userPerformance
        setUser(newUser)
      } catch (error) {
        console.error('Une erreur est survenue:', error)
        setError(true)
      }
    }
    if (renderAfterCalled.current) {
      fetchData()
    }
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
        {user && (
          <DataContainer>
            <Title name={user._userInfos.firstName} />
            <ContentDiv>
              <ChartContainer>
                <BarChartProgression data={user.sessionsActivity} />
                <ContentDiv>
                  <LineChartAverage data={user.sessionsAverage} />
                  <RadarChartPerformance data={user.performances} />
                  <GoalChart score={user.score} />
                </ContentDiv>
              </ChartContainer>
              <StatsCardList data={user.keyData} />
            </ContentDiv>
          </DataContainer>
        )}
      </ContentDiv>
    </div>
  )
}

export default Dashboard
