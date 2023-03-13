import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import Title from '../components/Title'
import StatsCardList from '../components/StatsCardList'
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
  flex-basis: 75%;
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
      const [userData, userActivity, userAverage] = await Promise.all([
        fetchUserInfo(id),
        fetchUserActivity(id),
        fetchUserAverage(id),
      ])

      setUserData(userData)
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
              <StatsCardList data={userData.keyData ?? []} />
            </ContentDiv>
          </DataDiv>
        )}
      </ContentDiv>
    </div>
  )
}

export default Home
