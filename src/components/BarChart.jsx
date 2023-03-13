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

const LegendDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LegendTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #20253a;
`

const LegendLi = styled.li`
  display: inline;
  color: rgba(116, 121, 140, 1);
  font-size: 16px;
  margin-right: 30px;
  &:before {
    content: '·';
    font-size: 80px;
    vertical-align: middle;
    line-height: 20px;
  }
`
const LegendUl = styled.div`
  display: flex;
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

const renderLegend = (props) => {
  const { payload } = props
  return (
    <LegendDiv>
      <LegendTitle>Activité quotidienne</LegendTitle>
      <LegendUl>
        {payload.map((entry, index) => (
          <LegendLi key={`item-${index}`} style={index === 1 ? { color: '#E60000' } : {}}>
            {' '}
            {entry.value}
          </LegendLi>
        ))}
      </LegendUl>
    </LegendDiv>
  )
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
      <StyledResponsiveContainer width="95%" height={300}>
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
          <Legend
            iconType="circle"
            iconSize={10}
            height={80}
            align="right"
            verticalAlign="top"
            content={renderLegend}
          />
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
