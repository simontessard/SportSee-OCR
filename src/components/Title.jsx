import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 24px;
`

const StyledName = styled.span`
  color: rgba(255, 1, 1, 1);
`
const StyledP = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`

function Title(props) {
  return (
    <div>
      <StyledH1>
        Bonjour <StyledName>{props.name}</StyledName>
      </StyledH1>
      <StyledP>
        {' '}
        Félicitation ! Vous avez explosé vos objectifs hier 👏{' '}
      </StyledP>
    </div>
  )
}

export default Title
