import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`
const UsersDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
`

const StyledButton = styled.button`
  max-height: 65px;
  background-color: #e60000;
  border: 0;
  border-radius: 5px;
  padding: 25px;
  color: white;
  cursor: pointer;
`

function Home() {
  const navigate = useNavigate()
  const [useApiData, setUseApiData] = useState(true)
  return (
    <div>
      <Header />
      <ContentDiv>
        <SideNav />
        <UsersDiv>
          <StyledButton onClick={() => navigate('/user/12', { state: useApiData })}>
            Utilisateur 1
          </StyledButton>
          <StyledButton onClick={() => navigate('/user/18', { state: useApiData })}>
            Utilisateur 2
          </StyledButton>
          <StyledButton onClick={() => setUseApiData(!useApiData)}>
            Données PropDefault: {useApiData ? 'Non' : 'Oui'}
          </StyledButton>
        </UsersDiv>
      </ContentDiv>
    </div>
  )
}

export default Home
