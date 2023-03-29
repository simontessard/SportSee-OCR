import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

function GoalChart(score) {
  let formattedScore = score.score * 100
  const data = [
    { name: 'score', value: formattedScore },
    { name: 'scoreLeft', value: 100 - formattedScore },
  ]
  const COLORS = ['#FF0000', '#e8e8e8']

  return (
    <StyledResponsiveContainer width="30%" height={200}>
      <PieChart>
        <text x={40} y={35} textAnchor="middle" dominantBaseline="middle">
          Score
        </text>
        <text
          x={125}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={'24px'}
          fontWeight={700}
        >
          {data[0].value}%
        </text>
        <text
          x={125}
          y={120}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={'14px'}
          fontWeight={700}
          fill={'#74798c'}
        >
          de votre objectif
        </text>
        <Pie
          data={data}
          dataKey="value"
          cx={120}
          cy={100}
          innerRadius={60}
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

GoalChart.defaultProps = {
  score: 0.8,
}

GoalChart.propTypes = {
  score: PropTypes.number,
}

export default GoalChart
