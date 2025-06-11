import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

/**
 * TimeSeriesChartProps interface
 * Defines the props for the TimeSeriesChart component.
 */
interface TimeSeriesChartProps {
  data: Array<{
    name: string;
    Bess: number;
    Wind: number;
    Solar: number;
  }>;
}

/**
 * TimeSeriesChart Component
 * Renders a time series line chart with Bess, Wind, and Solar curves.
 */
const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Green Optim</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" minTickGap={40} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Bess" stroke="#219150" dot={false} />
          <Line type="monotone" dataKey="Wind" stroke="#3b82f6" dot={false} />
          <Line type="monotone" dataKey="Solar" stroke="#f59e42" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeriesChart;
