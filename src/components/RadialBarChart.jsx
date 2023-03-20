import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function RadialBarChartGoal(score) {
  const data = [
    { name: 'score', value: score.score },
    { name: 'scoreLeft', value: 100 - score.score },
  ]
  const COLORS = ['#FF0000', '#e8e8e8']

  return (
    <StyledResponsiveContainer width="30%" height={250}>
      <PieChart>
        <text x={40} y={35} textAnchor="middle" dominantBaseline="middle">
          Score
        </text>
        <text
          x={175}
          y={130}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={'26px'}
          fontWeight={700}
        >
          {data[0].value}%
        </text>
        <text
          x={175}
          y={155}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={'16px'}
          fontWeight={700}
          fill={'#74798c'}
        >
          de votre objectif
        </text>
        <Pie
          data={data}
          dataKey="value"
          cx={170}
          cy={130}
          innerRadius={80}
          fill="#8884d8"
          startAngle={-270}
          endAngle={90}
          paddingAngle={0}
          cornerRadius={5}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </StyledResponsiveContainer>
  )
}

RadialBarChartGoal.defaultProps = {
  score: 50,
}

RadialBarChartGoal.propTypes = {
  score: PropTypes.number,
}

export default RadialBarChartGoal
