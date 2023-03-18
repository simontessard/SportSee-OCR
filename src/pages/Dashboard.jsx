import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import Title from '../components/Title'
import StatsCardList from '../components/StatsCardList'
import BarChart from '../components/BarChart'
import LineChartAverage from '../components/LineChart'
import RadarChartPerformance from '../components/RadarChart'
import RadialBarChart from '../components/RadialBarChart'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  fetchUserInfo,
  fetchUserActivity,
  fetchUserAverage,
  fetchUserPerformance,
  fetchUserScore,
} from '../api'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  max-width: 1200px;
`

const DataDiv = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const DataDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`

function Dashboard() {
  const { id } = useParams()

  const [userData, setUserData] = useState([])
  const [userName, setUserName] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAverage, setUserAverage] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [userScore, setUserScore] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const [userData, userActivity, userAverage, userPerformance, userScore] = await Promise.all([
        fetchUserInfo(id),
        fetchUserActivity(id),
        fetchUserAverage(id),
        fetchUserPerformance(id),
        fetchUserScore(id),
      ])

      setUserData(userData)
      setUserName(userData.userInfos.firstName)
      setUserActivity(userActivity)
      setUserAverage(userAverage)
      setUserPerformance(userPerformance)
      setUserScore(userScore)
    }
    fetchData()
  }, [id])

  return (
    <div>
      <Header />
      <ContentDiv>
        <SideNav />
        {userData && (
          <DataDiv>
            <Title name={userName} />
            <ContentDiv>
              <DataDiv2>
                {userActivity && userActivity.sessions && userActivity.sessions.length > 0 && (
                  <BarChart data={userActivity.sessions} />
                )}
                <ContentDiv>
                  <LineChartAverage data={userAverage} />
                  <RadarChartPerformance data={userPerformance} />
                  <RadialBarChart data={userScore} />
                </ContentDiv>
              </DataDiv2>
              <StatsCardList data={userData.keyData ?? []} />
            </ContentDiv>
          </DataDiv>
        )}
      </ContentDiv>
    </div>
  )
}

export default Dashboard
