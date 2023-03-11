import styled from 'styled-components'

const StyledImg = styled.img`
  height: 18px;
  width: 18px;
  padding: 20px;
`

function StatsCard({ image }) {
  return (
    <div>
      <StyledImg src={image} alt="" />
    </div>
  )
}

export default StatsCard
