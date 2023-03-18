import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styled from 'styled-components'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
  return (
    <div>
      <Header />
      <ContentDiv>
        <SideNav />
        <UsersDiv>
          <StyledButton onClick={() => navigate('/user/12')}>Utilisateur 1</StyledButton>
          <StyledButton onClick={() => navigate('/user/18')}>Utilisateur 2</StyledButton>
        </UsersDiv>
      </ContentDiv>
    </div>
  )
}

export default Home
