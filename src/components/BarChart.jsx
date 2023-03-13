import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import styled from 'styled-components'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  padding: 25px;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #e60000;
  color: white;
  border: 0;
`

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <StyledDiv>
        {payload.map((pld, index) => (
          <div key={index} style={{ display: 'inline-block', padding: 20 }}>
            <div>
              {pld.value}
              {pld.dataKey === 'kilogram' ? 'kg' : 'Kcal'}
            </div>
          </div>
        ))}
      </StyledDiv>
    )
  }

  return null
}

export default class Example extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data,
    }
  }

  render() {
    return (
      <StyledResponsiveContainer width="70%" height={300}>
        <BarChart
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={8}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            tickLine={false}
            tickMargin={15}
            dataKey="day"
            tick={{
              fontSize: 14,
            }}
          />
          <YAxis
            tick={{
              fontSize: 14,
            }}
            tickLine={false}
            tickMargin={30}
            orientation="right"
            tickCount={3}
            type="number"
          />
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: 0 }} />
          <Legend iconType="circle" iconSize={8} height={80} align="right" verticalAlign="top" />
          <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </StyledResponsiveContainer>
    )
  }
}
