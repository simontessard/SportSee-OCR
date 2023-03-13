import styled from 'styled-components'
import StatsCard from './StatsCard'
import caloriesLogo from '../assets/card/fire.svg'
import chickenLogo from '../assets/card/chicken.svg'
import appleLogo from '../assets/card/apple.svg'
import cheeseburgerLogo from '../assets/card/cheeseburger.svg'

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

function StatsCardList(data) {
  return (
    <CardsContainer>
      <StatsCard count={data.data.calorieCount} type="calories" image={caloriesLogo} />
      <StatsCard count={data.data.proteinCount} type="proteines" image={chickenLogo} />
      <StatsCard count={data.data.carbohydrateCount} type="glucides" image={appleLogo} />
      <StatsCard count={data.data.lipidCount} type="lipides" image={cheeseburgerLogo} />
    </CardsContainer>
  )
}

export default StatsCardList
