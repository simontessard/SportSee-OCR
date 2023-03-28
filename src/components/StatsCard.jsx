import styled from 'styled-components'

const StyledImg = styled.img`
  height: 60px;
  width: 60px;
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
  return (
    <Card>
      <StyledImg src={image} alt="" />
      <DataDisplay>
        <Number>{count}</Number>
        <Type>{capitalizeFirstLetter(type)}</Type>
      </DataDisplay>
    </Card>
  )
}

export default StatsCard
