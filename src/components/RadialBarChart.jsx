import React, { PureComponent } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

import styled from 'styled-components'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`
const userScore = [{ id: '1', name: 'L1', value: 88, fill: 'red' }]

export default class Example extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data,
    }

    console.log(this.state.data)
  }

  render() {
    return (
      <StyledResponsiveContainer width="33%" height={250}>
        <RadialBarChart
          startAngle={65}
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="90%"
          barSize={15}
          data={userScore}
        >
          <RadialBar minAngle={15} background clockWise dataKey="value" />
          <text
            x={'50%'}
            y={'50%'}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={'26px'}
            fontWeight={700}
          >
            {userScore[0].value}%
          </text>
          <text x={60} y={40} textAnchor="middle" dominantBaseline="middle">
            Score
          </text>
        </RadialBarChart>
      </StyledResponsiveContainer>
    )
  }
}
