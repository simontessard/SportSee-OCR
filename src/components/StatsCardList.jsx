import styled from 'styled-components'
import PropTypes from 'prop-types'
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
  data = data.data
  return (
    <CardsContainer>
      <StatsCard count={data.calorieCount} type="calories" image={caloriesLogo} />
      <StatsCard count={data.proteinCount} type="proteines" image={chickenLogo} />
      <StatsCard count={data.carbohydrateCount} type="glucides" image={appleLogo} />
      <StatsCard count={data.lipidCount} type="lipides" image={cheeseburgerLogo} />
    </CardsContainer>
  )
}

StatsCardList.defaultProps = {
  data: {
    data: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
}

StatsCardList.propTypes = {
  data: PropTypes.object,
}

export default StatsCardList
