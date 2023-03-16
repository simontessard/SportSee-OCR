import React from 'react'
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'

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
  font-size: 20px;
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
  return (
    <StyledResponsiveContainer width="33%" height={250}>
      <LineChart
        data={data.data}
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

export default LineChartAverage
