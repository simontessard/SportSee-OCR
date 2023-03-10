import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import styled from 'styled-components'

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
        <DataDiv></DataDiv>
      </ContentDiv>
    </div>
  )
}

export default Home
