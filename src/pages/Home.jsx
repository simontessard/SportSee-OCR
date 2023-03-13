import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import Title from '../components/Title'
import AllStatsCards from '../components/AllStatsCards'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserInfo, fetchUserActivity, fetchUserAverage } from '../api'
import { Navigate } from 'react-router-dom'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`

const DataDiv = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const DataDiv2 = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

function Home() {
  const { id } = useParams()

  const [userData, setUserData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAverage, setUserAverage] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserInfo(id)
      const userActivity = await fetchUserActivity(id)
      const userAverage = await fetchUserAverage(id)

      setUserData(userData)
      setUserActivity(userActivity)
      setUserActivity(userActivity)
      setUserAverage(userAverage)
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
                <LineChart data={userAverage.sessions} />
              </DataDiv2>
              <AllStatsCards data={userData.keyData ?? []} />
            </ContentDiv>
          </DataDiv>
        )}
      </ContentDiv>
    </div>
  )
}

export default Home
