import React from 'react';
import { Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../../context/DashboardContext';
import { useMonthlyTrends } from '../../hooks/useApi';

const TrendsChart: React.FC = () => {
  const { customerId } = useDashboard();
  const { data: trends, loading, error } = useMonthlyTrends(customerId, 12);

  if (loading) return <Typography>Loading trends...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!trends || trends.length === 0) return <Typography>No trends data</Typography>;

  const chartData = trends.map(trend => ({
    month: trend.month,
    totalSpent: trend.totalSpent,
    transactionCount: trend.transactionCount
  }));

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Monthly Spending Trends
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
              formatter={(value?: number, name?: string) => {
                if (value === undefined) return ['N/A', name || ''];
                if (name === 'totalSpent') return [`ZAR ${value.toLocaleString()}`, 'Total Spent'];
                return [value, 'Transactions'];
              }}
            />
          <Line type="monotone" dataKey="totalSpent" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TrendsChart;
