import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #ff0000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

const StyledDiv = styled.div`
  background: #fff;
`

const StyledUl = styled.ul`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  padding-inline-start: 10px;
`

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <StyledDiv>
        {payload.map((pld, index) => (
          <div key={index} style={{ display: 'inline-block', padding: 20 }}>
            <div>{pld.value} min </div>
          </div>
        ))}
      </StyledDiv>
    )
  }

  return null
}

export const renderLegend = () => {
  return <StyledUl>Durée moyenne des sessions</StyledUl>
}

function LineChartAverage(data) {
  // Format response to replace number by letter of the week
  const dayLetters = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
  }
  const formattedSessions = (oldData) => {
    if (oldData.sessions) {
      return oldData.sessions.map((d) => ({
        ...d,
        day: dayLetters[d.day],
      }))
    }
    return []
  }

  return (
    <StyledResponsiveContainer width="30%" height={200}>
      <LineChart
        data={formattedSessions(data.data)}
        margin={{
          top: 5,
          right: 15,
          left: 15,
          bottom: 35,
        }}
      >
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#FFFFFF' }}
          tickMargin={35}
        />
        <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: 0 }} cursor={false} />
        <Legend align="left" verticalAlign="top" content={renderLegend} />
        <Line type="natural" dataKey="sessionLength" stroke="#FFF" dot={false} strokeWidth={3} />
      </LineChart>
    </StyledResponsiveContainer>
  )
}

LineChartAverage.defaultProps = {
  data: {
    userId: 0,
    sessions: [
      {
        day: 1,
        sessionLength: 50,
      },
      {
        day: 2,
        sessionLength: 40,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 10,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 45,
      },
      {
        day: 7,
        sessionLength: 20,
      },
    ],
  },
}

LineChartAverage.propTypes = {
  data: PropTypes.object,
}

export default LineChartAverage
