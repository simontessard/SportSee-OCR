import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import Title from '../components/Title'
import StatsCardList from '../components/StatsCardList'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import RadarChartPerformance from '../components/RadarChart'
import PieChart from '../components/PieChart'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserInfo, fetchUserActivity, fetchUserAverage, fetchUsePerformance } from '../api'
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
  useEffect(() => {
    const fetchData = async () => {
      const [userData, userActivity, userAverage, userPerformance] = await Promise.all([
        fetchUserInfo(id),
        fetchUserActivity(id),
        fetchUserAverage(id),
        fetchUsePerformance(id),
      ])

      setUserData(userData)
      setUserActivity(userActivity)
      setUserAverage(userAverage)
      setUserPerformance(userPerformance)
    }
    fetchData()
  }, [id])

  if (userData === undefined) {
    return <Navigate to="/error" replace={true} />
  }

  // Format score
  const dataScore = [
    { id: '1', name: 'L1', value: 0 },
    { id: '2', name: 'L2', value: 0 },
  ]
  dataScore[0].value = userData.score * 100
  dataScore[1].value = 100 - dataScore[0].value

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
                  <LineChart data={userAverage.sessions} />
                  <RadarChartPerformance data={userPerformance.data} />
                  <PieChart data={dataScore} />
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
