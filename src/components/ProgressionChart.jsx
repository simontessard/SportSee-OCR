import React from 'react'
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
import PropTypes from 'prop-types'

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  padding-block: 25px;
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
  margin-top: 0;
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
          <LegendLi
            key={`item-${index}`}
            style={index === 1 ? { color: '#E60000' } : { color: '#282D30' }}
          >
            {' '}
            {entry.value}
          </LegendLi>
        ))}
      </LegendUl>
    </LegendDiv>
  )
}

function ProgressionChart(data) {
  const formattedData = data.data.sessions
  return (
    <StyledResponsiveContainer width="100%" height={250}>
      <BarChart
        data={formattedData}
        margin={{
          top: 5,
          right: 0,
          left: 15,
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
          tickMargin={5}
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

ProgressionChart.defaultProps = {
  data: {
    data: {
      sessions: [
        {
          day: '2020-07-01',
          kilogram: 70,
          calories: 240,
        },
        {
          day: '2020-07-02',
          kilogram: 69,
          calories: 220,
        },
        {
          day: '2020-07-03',
          kilogram: 70,
          calories: 280,
        },
        {
          day: '2020-07-04',
          kilogram: 70,
          calories: 500,
        },
        {
          day: '2020-07-05',
          kilogram: 69,
          calories: 160,
        },
        {
          day: '2020-07-06',
          kilogram: 69,
          calories: 162,
        },
        {
          day: '2020-07-07',
          kilogram: 69,
          calories: 390,
        },
      ],
    },
  },
}

ProgressionChart.propTypes = {
  data: PropTypes.object,
}

export default ProgressionChart
