import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`

const ErrorText = styled.div`
  margin-top: 50px;
  font-size: 40px;
`

function Error(props) {
  return (
    <div>
      <Header />
      <ContentDiv>
        <SideNav />
        <ErrorText> {props.text}</ErrorText>
      </ContentDiv>
    </div>
  )
}

export default Error
