import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import styled from 'styled-components'
import data from '../../data/data.js'
import Title from '../../components/Title'
import AllStatsCards from '../../components/AllStatsCards'
import BarChart from '../../components/BarChart'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const DataDiv = styled.div`
  margin-left: 100px;
  margin-top: 70px;
`

function Home() {
  return (
    <div>
      <Header />
      <ContentDiv>
        <SideNav />
        <DataDiv>
          <Title name={data.USER_MAIN_DATA[0].userInfos.firstName} />
          <ContentDiv>
            <BarChart data={data.USER_ACTIVITY[0]} />
            <AllStatsCards data={data.USER_MAIN_DATA[0].keyData} />
          </ContentDiv>
        </DataDiv>
      </ContentDiv>
    </div>
  )
}

export default Home
