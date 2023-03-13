import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import Title from '../components/Title'
import AllStatsCards from '../components/AllStatsCards'
import BarChart from '../components/BarChart'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserInfo, fetchUserActivity } from '../api'
import { Navigate } from 'react-router-dom'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`

const DataDiv = styled.div`
  margin-left: 50px;
  margin-top: 70px;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

function Home() {
  const { id } = useParams()

  const [userData, setUserData] = useState([])
  const [userActivity, setUserActivity] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserInfo(id)
      const userActivity = await fetchUserActivity(id)

      setUserData(userData)
      setUserActivity(userActivity)
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
              {userActivity && userActivity.sessions && userActivity.sessions.length > 0 && (
                <BarChart data={userActivity.sessions} />
              )}
              <AllStatsCards data={userData.keyData ?? []} />
            </ContentDiv>
          </DataDiv>
        )}
      </ContentDiv>
    </div>
  )
}

export default Home
