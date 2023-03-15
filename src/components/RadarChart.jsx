import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

import styled from 'styled-components'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background-color: #282d30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadarChartPerformance(data) {
  return (
    <StyledResponsiveContainer width="33%" height={250}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
        <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF' }} />
        <Radar name="Mike" dataKey="value" fill="red" fillOpacity={0.5} />
      </RadarChart>
    </StyledResponsiveContainer>
  )
}

export default RadarChartPerformance
