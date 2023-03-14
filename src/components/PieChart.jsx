import React, { PureComponent } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import styled from 'styled-components'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

export default class Example extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data,
    }
  }

  render() {
    return (
      <StyledResponsiveContainer width="33%" height={200}>
        <PieChart width={50} height={50}>
          <text x={35} y={25} textAnchor="middle" dominantBaseline="middle">
            Score
          </text>
          <Pie
            data={this.state.data}
            dataKey="value"
            innerRadius="80%"
            outerRadius="100%"
            fill="#FF0000"
            startAngle={90}
            endAngle={-270}
            paddingAngle={0}
            cornerRadius={5}
          >
            <Cell fill="#CCC" />
          </Pie>
        </PieChart>
      </StyledResponsiveContainer>
    )
  }
}
