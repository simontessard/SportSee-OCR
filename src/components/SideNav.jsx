import styled from 'styled-components'
import logoMeditation from '../assets/sidebar/meditation.svg'
import logoSwim from '../assets/sidebar/swim.svg'
import logoBike from '../assets/sidebar/bike.svg'
import logoGym from '../assets/sidebar/gym.svg'

const StyledNav = styled.nav`
  padding: 20px;
  background: #020203;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 828px;
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
  align-items: center;
`

const StyledLogo = styled.img`
  background-color: white;
  padding: 10px;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  cursor: pointer;
`

const StyledGroupLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

function SideNav() {
  return (
    <StyledNav>
      <StyledGroupLogo>
        <StyledLogo src={logoMeditation} alt="Meditation" />
        <StyledLogo src={logoSwim} alt="Swim" />
        <StyledLogo src={logoBike} alt="Bike" />
        <StyledLogo src={logoGym} alt="Gym" />
      </StyledGroupLogo>
    </StyledNav>
  )
}

export default SideNav
