import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImg = styled.img`
  height: 60px;
  width: 50px;
`
const Card = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: row;
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  padding: 22px;
`

const DataDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
`

const Number = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #282d30;
`

const Type = styled.span`
  color: rgba(116, 121, 140, 1);
  font-weight: 500;
  font-size: 14px;
`

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function StatsCard({ image, type, count }) {
  let unit = 'kCal'
  if (type !== 'calories') {
    unit = 'g'
  }
  return (
    <Card>
      <StyledImg src={image} alt="" />
      <DataDisplay>
        <Number>
          {count}
          {unit}
        </Number>
        <Type>{capitalizeFirstLetter(type)}</Type>
      </DataDisplay>
    </Card>
  )
}

StatsCard.defaultProps = {
  image: '../assets/card/chicken.svg',
  type: 'calories',
  count: 50,
}

StatsCard.propTypes = {
  image: PropTypes.string,
  type: PropTypes.string,
  count: PropTypes.number,
}

export default StatsCard
