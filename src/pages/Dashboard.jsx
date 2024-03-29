import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import Title from '../components/Title'
import StatsCardList from '../components/StatsCardList'
import ProgressionChart from '../components/ProgressionChart'
import LineChartAverage from '../components/LineChart'
import RadarChartPerformance from '../components/RadarChartPerformance'
import GoalChart from '../components/GoalChart'
import React, { useState, useEffect, useRef } from 'react'
import { Navigate, useParams, useLocation } from 'react-router-dom'
import {
  fetchUserInfo,
  fetchUserActivity,
  fetchUserSessions,
  fetchUserPerformance,
} from '../api/service'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const DataContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 650px;
`

function Dashboard() {
  // Get the id of the user in the URL
  const { id } = useParams()
  const { state } = useLocation()

  const renderAfterCalled = useRef(true)

  const [userData, setUserData] = useState(false)
  const [userActivity, setUserActivity] = useState(undefined)
  const [userAverage, setUserAverage] = useState(undefined)
  const [userPerformance, setUserPerformance] = useState(undefined)

  const [Error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, userActivity, userAverage, userPerformance] = await Promise.all([
          fetchUserInfo(id),
          fetchUserActivity(id),
          fetchUserSessions(id),
          fetchUserPerformance(id),
        ])
        if (state) {
          setUserData(userData)
          setUserActivity(userActivity.sessionsActivity)
          setUserAverage(userAverage.sessionsAverage)
          setUserPerformance(userPerformance.performances)
        }
      } catch (error) {
        console.error('Une erreur est survenue:', error)
        setError(true)
      }
    }
    if (renderAfterCalled.current) {
      fetchData()
    }
  }, [id, state])

  // In case the id given is wrong, error page is displayed
  if (Error) {
    return <Navigate to="/error" replace={true} />
  }

  return (
    <div>
      <Header />
      <ContentDiv>
        <SideNav />
        <DataContainer>
          <Title name={userData.name} />
          <ContentDiv>
            <ChartContainer>
              <ProgressionChart data={userActivity} />
              <ContentDiv>
                <LineChartAverage data={userAverage} />
                <RadarChartPerformance data={userPerformance} />
                <GoalChart score={userData.goal} />
              </ContentDiv>
            </ChartContainer>
            <StatsCardList data={userData.macro} />
          </ContentDiv>
        </DataContainer>
      </ContentDiv>
    </div>
  )
}

export default Dashboard
