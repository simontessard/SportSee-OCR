import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background-color: #282d30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadarChartPerformance(data) {
  // Format response to replace number by name
  const kindNames = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  }
  const formattedPerformance = (oldData) => {
    if (oldData.data) {
      return oldData.data.map((d) => ({
        ...d,
        kind: kindNames[d.kind],
      }))
    }
    return []
  }

  return (
    <StyledResponsiveContainer width="30%" height={200}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedPerformance(data.data)}>
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
        <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF', fontSize: '7px' }} />
        <Radar name="Mike" dataKey="value" fill="red" fillOpacity={0.5} />
      </RadarChart>
    </StyledResponsiveContainer>
  )
}

RadarChartPerformance.defaultProps = {
  data: {
    data: {
      userId: 0,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
      },
      data: [
        {
          value: 50,
          kind: 1,
        },
        {
          value: 40,
          kind: 2,
        },
        {
          value: 100,
          kind: 3,
        },
        {
          value: 80,
          kind: 4,
        },
        {
          value: 100,
          kind: 5,
        },
        {
          value: 50,
          kind: 6,
        },
      ],
    },
  },
}

RadarChartPerformance.propTypes = {
  data: PropTypes.object,
}

export default RadarChartPerformance
