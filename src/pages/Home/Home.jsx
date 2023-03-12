import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import styled from 'styled-components'
import Title from '../../components/Title'
import AllStatsCards from '../../components/AllStatsCards'
import BarChart from '../../components/BarChart'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const DataDiv = styled.div`
  margin-left: 100px;
  margin-top: 70px;
  flex-basis: 100%;
`

function Home() {
  const { id } = useParams()
  const [userData, setuserInfo] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/user/' + id)
      .then((response) => response.json())
      .then((data) => setuserInfo(data.data))
  }, [id])

  const [activityData, setActivityData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/user/${id}/activity`)
      .then((response) => response.json())
      .then((data) => setActivityData(data.data.sessions))
  }, [id])

  return (
    <div>
      <Header />
      <ContentDiv>
        <SideNav />
        <DataDiv>
          {userData && userData.userInfos && <Title name={userData.userInfos.firstName} />}
          <ContentDiv>
            {activityData.length > 0 && <BarChart data={activityData} />}
            <AllStatsCards data={userData.keyData ?? []} />
          </ContentDiv>
        </DataDiv>
      </ContentDiv>
    </div>
  )
}

export default Home
