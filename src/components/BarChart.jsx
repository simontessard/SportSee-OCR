import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
]

export default class Example extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data,
    }
  }

  render() {
    return (
      <BarChart
        width={700}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis orientation="right" />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar
          barSize={7}
          name="Poids (kg)"
          dataKey="pv"
          fill="#282D30"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          barSize={7}
          name="Calories brûlées (kCal)"
          dataKey="uv"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    )
  }
}
