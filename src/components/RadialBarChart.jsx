import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

import styled from 'styled-components'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadialBarChartGoal(data) {
  return (
    <StyledResponsiveContainer width="33%" height={250}>
      <RadialBarChart
        startAngle={65}
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="90%"
        barSize={15}
        data={data.data}
      >
        <RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={15} />
        <text
          x={'50%'}
          y={'45%'}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={'26px'}
          fontWeight={700}
        >
          88%
        </text>
        <text
          x={'50%'}
          y={'55%'}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={'16px'}
          fontWeight={700}
          fill={'#74798c'}
        >
          de votre objectif
        </text>
        <text x={60} y={40} textAnchor="middle" dominantBaseline="middle">
          Score
        </text>
      </RadialBarChart>
    </StyledResponsiveContainer>
  )
}

export default RadialBarChartGoal
