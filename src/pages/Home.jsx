import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import Title from '../components/Title'
import StatsCardList from '../components/StatsCardList'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
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
import { Navigate } from 'react-router-dom'

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

function Home() {
  const { id } = useParams()

  const [userData, setUserData] = useState([])
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
      setUserActivity(userActivity)
      setUserAverage(userAverage)
      setUserPerformance(userPerformance)
      setUserScore(userScore)
    }
    fetchData()
  }, [id])

  if (userData === undefined) {
    return <Navigate to="/error" replace={true} />
  }

  return (
    <div>
      <Header />
      <ContentDiv>
        <SideNav />
        {userData && (
          <DataDiv>
            {userData && userData.userInfos && <Title name={userData.userInfos.firstName} />}
            <ContentDiv>
              <DataDiv2>
                {userActivity && userActivity.sessions && userActivity.sessions.length > 0 && (
                  <BarChart data={userActivity.sessions} />
                )}
                <ContentDiv>
                  <LineChart data={userAverage} />
                  <RadarChartPerformance data={userPerformance.data} />
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

export default Home
